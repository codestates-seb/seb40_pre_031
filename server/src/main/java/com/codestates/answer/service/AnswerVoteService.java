package com.codestates.answer.service;

import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.codestates.answer.entity.AnswerVote;
import com.codestates.answer.repository.AnswerVoteRepository;
import com.codestates.status.VoteStatus;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerVoteService {
	private final AnswerVoteRepository answerVoteRepository;

	public void updateStatusOrCreateVoteIfNotExist(AnswerVote answerVote) {
		Optional<AnswerVote> foundOrNull = findOneByExample(answerVote);

		foundOrNull.ifPresentOrElse(
			found -> updateAnswerVoteStatus(found, answerVote.getStatus()),
			() -> createAnswerVote(answerVote)
		);
	}

	public void createAnswerVote(AnswerVote answerVote) {
		answerVoteRepository.save(answerVote);
	}

	public void updateAnswerVoteStatus(AnswerVote answerVote, VoteStatus status) {
		answerVote.setStatus(status);
		answerVoteRepository.save(answerVote);
	}

	public void deleteAnswerVote(AnswerVote answerVote) {
		Optional<AnswerVote> foundOrNull = findOneByExample(answerVote);
		foundOrNull.ifPresent(answerVoteRepository::delete);
	}

	public Optional<AnswerVote> findOneByExample(AnswerVote answerVote) {
		return answerVoteRepository.findOne(
			Example.of(answerVote)
		);
	}
}
