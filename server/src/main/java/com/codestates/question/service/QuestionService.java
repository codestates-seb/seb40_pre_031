package com.codestates.question.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.question.entity.Question;
import com.codestates.question.entity.QuestionVote;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.repository.QuestionVoteRepository;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;
import com.codestates.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
	private final QuestionVoteRepository questionVoteRepository;
	private final QuestionRepository questionRepository;
	private final UserRepository userRepository;

	public Question createQuestion(Question question) {
		questionRepository.save(question);

		return question;
	}

	public Question updateQuestion(Question question) {
		Question verifiedQuestion = findVerifiedQuestion(question.getId());

		Optional.ofNullable(question.getTitle()).ifPresent(verifiedQuestion::setTitle);
		Optional.ofNullable(question.getContent()).ifPresent(verifiedQuestion::setContent);

		return questionRepository.save(verifiedQuestion);
	}

	public Question findQuestion(Long questionId) {

		return findVerifiedQuestion(questionId);
	}

	public Page<Question> findQuestions(int page, int size) {

		return questionRepository.questionPage(PageRequest.of(page, size));
	}

	public void deleteQuestion(Long questionId) {
		Question findQuestion = findVerifiedQuestion(questionId);

		questionRepository.deleteById(questionId);
	}

	private Question findVerifiedQuestion(Long questionId) {
		Optional<Question> getQuestion = questionRepository.findById(questionId);

		return getQuestion.orElseThrow(
			() -> new RuntimeException("QUESTION_NOT_FOUND"));
	}

	public VoteStatus checkUserVoteStatus(Question question, User user) {
		Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findByQuestionAndUser(question, user);

		if (optionalQuestionVote.isEmpty()) {

			return VoteStatus.NONE;
		}

		return optionalQuestionVote.get().getStatus();
	}

	@Transactional
	public int updateView(Long id) {

		return this.questionRepository.updateView(id);
	}
}
