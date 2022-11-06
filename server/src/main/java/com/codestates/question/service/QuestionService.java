package com.codestates.question.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.question.entity.Question;
import com.codestates.question.entity.QuestionVote;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.repository.QuestionVoteRepository;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
	private final QuestionVoteRepository questionVoteRepository;
	private final QuestionRepository questionRepository;
	private final AnswerRepository answerRepository;

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

	public void deleteQuestion(Long questionId) {
		Question findQuestion = findVerifiedQuestion(questionId);

		questionRepository.deleteById(questionId);
	}

	public Question findQuestion(Long questionId) {

		return findVerifiedQuestion(questionId);
	}

	public Question findVerifiedQuestion(Long questionId) {
		Optional<Question> getQuestion = questionRepository.findById(questionId);

		return getQuestion.orElseThrow(
			() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
	}

	public VoteStatus checkUserVoteStatus(Question question, User user) {
		Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findByQuestionAndUser(question, user);

		if (optionalQuestionVote.isEmpty()) {

			return VoteStatus.NONE;
		}

		return optionalQuestionVote.get().getStatus();
	}

	@Transactional
	public void updateView(Long id) {

		this.questionRepository.updateView(id);
	}

	public void chosenAnswer(Long questionId, Long chosenAnswerId) {
		Answer answer = answerRepository.findById(chosenAnswerId)
			.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

		if (!answer.getQuestion().getId().equals(questionId)) {
			throw new BusinessLogicException(ExceptionCode.WRONG_ID);
		}

		answer.getQuestion().setChosenAnswerId(chosenAnswerId);
	}
}
