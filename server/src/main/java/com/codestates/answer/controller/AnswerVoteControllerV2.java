package com.codestates.answer.controller;

import javax.validation.constraints.Positive;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.answer.entity.AnswerVote;
import com.codestates.answer.service.AnswerService;
import com.codestates.answer.service.AnswerVoteService;
import com.codestates.auth.UsersDetailService;
import com.codestates.status.VoteStatus;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

// @CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true", maxAge = 5000L)
@RestController
@RequestMapping("/v2/questions/{question_id}/answers/{answer_id}/votes")
@RequiredArgsConstructor
public class AnswerVoteControllerV2 {
	private final AnswerVoteService answerVoteService;
	private final AnswerService answerService;
	private final UserService userService;

	@PostMapping("/up")
	public ResponseEntity postUpVote(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		AnswerVote answerVote = buildVote(
			answerId,
			usersDetail.getId(),
			VoteStatus.UP
		);

		answerVoteService.updateStatusOrCreateVoteIfNotExist(answerVote);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/up")
	public ResponseEntity deleteUpVote(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		AnswerVote answerVote = buildVote(
			answerId,
			usersDetail.getId(),
			VoteStatus.UP
		);

		answerVoteService.deleteAnswerVote(answerVote);

		return ResponseEntity.ok().build();
	}

	@PostMapping("/down")
	public ResponseEntity postDownVote(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		AnswerVote answerVote = buildVote(
			answerId,
			usersDetail.getId(),
			VoteStatus.DOWN
		);

		answerVoteService.updateStatusOrCreateVoteIfNotExist(answerVote);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/down")
	public ResponseEntity deleteDownVote(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		AnswerVote answerVote = buildVote(
			answerId,
			usersDetail.getId(),
			VoteStatus.DOWN
		);

		answerVoteService.deleteAnswerVote(answerVote);

		return ResponseEntity.ok().build();
	}

	private AnswerVote buildVote(Long answerId, Long loginId, VoteStatus status) {
		AnswerVote answerVote = AnswerVote.builder()
			.status(status)
			.build();
		answerVote.setAnswer(answerService.findVerifiedAnswer(answerId));
		answerVote.setUser(userService.findMember(loginId));

		return answerVote;
	}
}
