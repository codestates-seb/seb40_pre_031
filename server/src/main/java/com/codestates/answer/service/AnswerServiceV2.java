package com.codestates.answer.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerServiceV2 {
	private final AnswerRepository answerRepository;

	public Answer createAnswer(Answer answer) {
		return answerRepository.save(answer);
	}

	public Answer updateAnswer(Answer answer) {
		return answerRepository.save(answer);
	}

	public void deleteAnswer(Answer answer) {
		answerRepository.delete(answer);
	}

	public Answer findVerifiedAnswer(Long answerId) {
		Optional<Answer> found = answerRepository.findById(answerId);

		return found.orElseThrow(() ->
			new RuntimeException("ANSWER_NOT_FOUND"));
	}

	public void checkAnswerAuthor(Long authorId, Long loginId) {
		if (authorId != loginId) {
			throw new RuntimeException("NO_PERMISSION_TO_EDIT_THIS_ANSWER");
		}
	}
}
