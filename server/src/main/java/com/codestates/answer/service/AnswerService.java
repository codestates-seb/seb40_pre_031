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

	public void createAnswer(Answer answer) {
		answerRepository.save(answer);
	}

	public void updateAnswer(Long answerId, String content) {
		Answer found = findVerifiedAnswer(answerId);
		found.setContent(content);

		answerRepository.save(found);
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
