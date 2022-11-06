package com.codestates.question.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.question.entity.QuestionVote;
import com.codestates.question.repository.QuestionVoteRepository;
import com.codestates.status.VoteStatus;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionVoteService {
	private final QuestionVoteRepository questionVoteRepository;

	public void updateStatusOrCreateVoteIfNotExist(QuestionVote questionVote) {
		Optional<QuestionVote> foundOrNull = findByQuestionAndUser(questionVote);

		foundOrNull.ifPresentOrElse(
			found -> updateQuestionVoteStatus(found, questionVote.getStatus()),
			() -> createQuestionVote(questionVote)
		);
	}

	public void createQuestionVote(QuestionVote questionVote) {
		questionVoteRepository.save(questionVote);
	}

	public void updateQuestionVoteStatus(QuestionVote questionVote, VoteStatus status) {
		questionVote.setStatus(status);
		questionVoteRepository.save(questionVote);
	}

	public void deleteQuestionVote(QuestionVote questionVote) {
		Optional<QuestionVote> foundOrNull = findByQuestionAndUser(questionVote);
		foundOrNull.ifPresent(questionVoteRepository::delete);
	}

	public Optional<QuestionVote> findByQuestionAndUser(QuestionVote questionVote) {

		return questionVoteRepository.findByQuestionIdAndUserId(
			questionVote.getQuestion().getId(),
			questionVote.getUser().getId()
		);
	}
}
