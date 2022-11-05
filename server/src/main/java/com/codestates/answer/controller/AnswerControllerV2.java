package com.codestates.answer.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.service.AnswerServiceV2;
import com.codestates.auth.UsersDetailService;
import com.codestates.question.service.QuestionService;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v2/questions/{question_id}/answers/")
@Validated
@RequiredArgsConstructor
public class AnswerControllerV2 {
	private final AnswerServiceV2 answerService;
	private final QuestionService questionService;
	private final UserService userService;

	@PostMapping("")
	public ResponseEntity postAnswer(@Positive @PathVariable(name = "question_id") Long questionId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail,
		@Valid @RequestBody AnswerPostDto answerPostDto) {
		Answer answer = buildPostAnswer(
			questionId,
			usersDetail.getId(),
			answerPostDto.getContent()
		);

		answerService.createAnswer(answer);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("{answer_id}")
	public ResponseEntity patchAnswer(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail,
		@Valid @RequestBody AnswerPatchDto answerPatchDto) {
		Answer answer = buildPatchAnswer(
			answerId,
			usersDetail.getId(),
			answerPatchDto.getContent()
		);

		answerService.updateAnswer(answer);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("{answer_id}")
	public ResponseEntity deleteAnswer(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		Answer answer = buildDeleteAnswer(
			answerId,
			usersDetail.getId()
		);

		answerService.deleteAnswer(answer);

		return ResponseEntity.noContent().build();
	}

	private Answer buildPostAnswer(Long questionId, Long userId, String content) {
		Answer answer = Answer.builder()
			.content(content)
			.build();
		answer.setQuestion(questionService.findQuestion(questionId));
		answer.setUser(userService.findMember(userId));

		return answer;
	}

	private Answer buildPatchAnswer(Long answerId, Long userId, String content) {
		Answer answer = answerService.findVerifiedAnswer(answerId);
		answerService.checkAnswerAuthor(
			answer.getUser().getId(),
			userId
		);
		answer.updateContent(content);

		return answer;
	}

	private Answer buildDeleteAnswer(Long answerId, Long userId) {
		Answer answer = answerService.findVerifiedAnswer(answerId);
		answerService.checkAnswerAuthor(
			answer.getUser().getId(),
			userId
		);

		return answer;
	}
}
