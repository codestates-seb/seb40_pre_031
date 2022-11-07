package com.codestates.question.service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.entity.AnswerVote;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.answer.repository.AnswerVoteRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.question.entity.Question;
import com.codestates.question.entity.QuestionVote;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.repository.QuestionVoteRepository;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
	private final QuestionVoteRepository questionVoteRepository;
	private final QuestionRepository questionRepository;
	private final AnswerRepository answerRepository;
	private final AnswerVoteRepository answerVoteRepository;
	private final UserService userService;

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

		questionRepository.delete(findQuestion);
	}

	public Question findQuestion(Long questionId, Principal principal) {
		Question question = findVerifiedQuestion(questionId);

		orderChosenAnswerFirst(question);
		changeAnswerVoteStatus(question, principal);

		return question;
	}

	private void orderChosenAnswerFirst(Question question) {
		if (question.getChosenAnswerId() == null || question.getAnswerList().size() == 0 ||
			question.getAnswerList().get(0).getId().equals(question.getChosenAnswerId())) {

			return;
		}

		List<Answer> answerList = question.getAnswerList();

		for (int i = 0; i < answerList.size(); i++) {
			if (answerList.get(i).getId().equals(question.getChosenAnswerId())) {
				answerList.add(0, answerList.remove(i));

				break;
			}
		}
	}

	private void changeAnswerVoteStatus(Question question, Principal principal) {
		if (principal == null) {

			return;
		}

		User findUser = userService.findUserByEmail(principal.getName());

		List<AnswerVote> answerVotes = answerVoteRepository.findByAnswer_QuestionAndUser(question, findUser);

		answerVotes.stream()
			.filter(answerVote -> answerVote.getStatus() == VoteStatus.UP)
			.forEach(answerVote -> answerVote.getAnswer().setVoteStatus(VoteStatus.UP));

		answerVotes.stream()
			.filter(answerVote -> answerVote.getStatus() == VoteStatus.DOWN)
			.forEach(answerVote -> answerVote.getAnswer().setVoteStatus(VoteStatus.DOWN));
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
