package com.codestates.answer.controller;

import javax.validation.constraints.Positive;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.answer.service.AnswerVoteService;
import com.codestates.status.VoteStatus;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/questions/{question_id}/answers/{answer_id}/votes")
@RequiredArgsConstructor
public class AnswerVoteController {
	private final AnswerVoteService answerVoteService;

	@PostMapping("/up")
	public ResponseEntity postUpVote(@Positive @PathVariable(name = "answer_id") Long answerId) {
		answerVoteService.updateStatusOrCreateVoteIfNotExist(answerId, 1L, VoteStatus.UP);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/up")
	public ResponseEntity deleteUpVote(@Positive @PathVariable(name = "answer_id") Long answerId) {
		answerVoteService.deleteAnswerVote(answerId, 1L);

		return ResponseEntity.ok().build();
	}

	@PostMapping("/down")
	public ResponseEntity postDownVote(@Positive @PathVariable(name = "answer_id") Long answerId) {
		answerVoteService.updateStatusOrCreateVoteIfNotExist(answerId, 1L, VoteStatus.DOWN);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/down")
	public ResponseEntity deleteDownVote(@Positive @PathVariable(name = "answer_id") Long answerId) {
		answerVoteService.deleteAnswerVote(answerId, 1L);

		return ResponseEntity.ok().build();
	}
}
