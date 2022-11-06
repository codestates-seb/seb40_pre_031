package com.codestates.answer.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;

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
			new RuntimeException("ANSWER_NOT_FOUND"));
	}
}
