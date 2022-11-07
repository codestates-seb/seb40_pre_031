package com.codestates.question.controller;

import javax.validation.constraints.Positive;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.auth.UsersDetailService;
import com.codestates.question.entity.QuestionVote;
import com.codestates.question.service.QuestionService;
import com.codestates.question.service.QuestionVoteService;
import com.codestates.status.VoteStatus;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v2/questions/{question_id}/votes")
@RequiredArgsConstructor
public class QuestionVoteControllerV2 {
	private final QuestionVoteService questionVoteService;
	private final QuestionService questionService;
	private final UserService userService;

	@PostMapping("/up")
	public ResponseEntity postVoteUp(@PathVariable("question_id") @Positive Long questionId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		QuestionVote questionVote = buildVote(
			questionId,
			usersDetail.getId(),
			VoteStatus.UP
		);

		questionVoteService.updateStatusOrCreateVoteIfNotExist(questionVote);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/up")
	public ResponseEntity deleteVoteUp(@PathVariable("question_id") @Positive Long questionId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		QuestionVote questionVote = buildVote(
			questionId,
			usersDetail.getId(),
			VoteStatus.UP
		);

		questionVoteService.deleteQuestionVote(questionVote);

		return ResponseEntity.ok().build();
	}

	@PostMapping("/down")
	public ResponseEntity postVoteDown(@PathVariable("question_id") @Positive Long questionId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		QuestionVote questionVote = buildVote(
			questionId,
			usersDetail.getId(),
			VoteStatus.DOWN
		);

		questionVoteService.updateStatusOrCreateVoteIfNotExist(questionVote);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/down")
	public ResponseEntity deleteVoteDown(@PathVariable("question_id") @Positive Long questionId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		QuestionVote questionVote = buildVote(
			questionId,
			usersDetail.getId(),
			VoteStatus.DOWN
		);

		questionVoteService.deleteQuestionVote(questionVote);

		return ResponseEntity.ok().build();
	}

	private QuestionVote buildVote(Long questionId, Long userId, VoteStatus status) {
		QuestionVote questionVote = QuestionVote.builder()
			.status(status)
			.build();
		questionVote.setQuestion(questionService.findVerifiedQuestion(questionId));
		questionVote.setUser(userService.findMember(userId));

		return questionVote;
	}
}
