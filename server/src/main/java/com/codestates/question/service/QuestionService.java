package com.codestates.question.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

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
	/* DI */
	private final QuestionRepository questionRepository;
	private final QuestionVoteRepository questionVoteRepository;
	private final UserRepository userRepository;

	/* 질문글 등록 */
	public Question createQuestion(Question question, User user) {
		userRepository.save(user);

		question.setUser(user);

		questionRepository.save(question);

		return question;
	}

	/* 질문글 수정 */
	public Question updateQuestion(Question question) {
		Question verifiedQuestion = findVerifiedQuestion(question.getId());

		/* 수정 */
		Optional.ofNullable(question.getTitle()).ifPresent(verifiedQuestion::setTitle);
		Optional.ofNullable(question.getContent()).ifPresent(verifiedQuestion::setContent);

		return questionRepository.save(verifiedQuestion);
	}

	/* 특정 질문글 조회 */
	public Question findQuestion(Long questionId) {

		return findVerifiedQuestion(questionId);
	}

	/* 전체 질문글 조회 */
	public Page<Question> findQuestions(int page, int size) {

		return questionRepository.questionPage(PageRequest.of(page, size));
	}

	/* 질문글 삭제 */
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
		userRepository.save(user);

		Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findByQuestionAndUser(question, user);

		if (optionalQuestionVote.isEmpty()) {

			return VoteStatus.NONE;
		}

		return optionalQuestionVote.get().getStatus();
	}
}
