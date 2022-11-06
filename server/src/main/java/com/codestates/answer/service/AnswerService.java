package com.codestates.answer.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.entity.AnswerVote;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.status.VoteStatus;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerService {
	private final AnswerRepository answerRepository;

	public Answer createAnswer(Answer answer) {
		return answerRepository.save(answer);
	}

	public Answer updateAnswer(Answer answer) {
		Answer found = findVerifiedAnswer(answer.getId());
		found.updateContent(answer.getContent());

		return answerRepository.save(found);
	}

	public void deleteAnswer(Long answerId) {
		Answer found = findVerifiedAnswer(answerId);

		answerRepository.delete(found);
	}

	public Answer findVerifiedAnswer(Long answerId) {
		Optional<Answer> found = answerRepository.findById(answerId);

		return found.orElseThrow(() ->
			new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
	}

	public VoteStatus getUserAnswerVoteStatus(Long answerId, Long userId) {
		Answer answer = findVerifiedAnswer(answerId);

		for (AnswerVote answerVote : answer.getAnswerVoteList()) {
			if (answerVote.getUser().getId().equals(userId)) {

				return answerVote.getStatus();
			}
		}

		return null;
	}
}
