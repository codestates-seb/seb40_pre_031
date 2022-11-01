package com.codestates.answer.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.entity.AnswerVote;
import com.codestates.answer.repository.AnswerVoteRepository;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerVoteService {
	private final AnswerVoteRepository answerVoteRepository;
	private final AnswerService answerService;
	private final UserService userService;

	public void updateStatusOrCreateVoteIfNotExist(Long answerId, Long userId, VoteStatus voteStatus) {
		Optional<AnswerVote> found = answerVoteRepository.findByAnswerIdAndUserId(answerId, userId);
		found.ifPresentOrElse(
			answerVote -> answerVote.setStatus(voteStatus),
			() -> createAnswerVote(answerId, userId, voteStatus)
		);
	}

	public void createAnswerVote(Long answerId, Long userId, VoteStatus voteStatus) {
		Answer answer = answerService.findVerifiedAnswer(answerId);
		User user = userService.findMember(userId);

		AnswerVote answerVote = new AnswerVote();
		answerVote.setStatus(voteStatus);
		answerVote.setUser(user);
		answerVote.setAnswer(answer);

		answerVoteRepository.save(answerVote);
	}

	public void deleteAnswerVote(Long answerId, Long userId) {
		Optional<AnswerVote> answerVote = answerVoteRepository.findByAnswerIdAndUserId(answerId, userId);
		answerVote.ifPresent(answerVoteRepository::delete);
	}
}
