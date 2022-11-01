package com.codestates.answer.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.codestates.answer.service.AnswerService;
import com.codestates.question.service.QuestionService;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/questions/{question_id}/answers/")
@Validated
@RequiredArgsConstructor
public class AnswerController {
	private final AnswerService answerService;
	private final QuestionService questionService;
	private final UserService userService;

	@PostMapping("")
	public ResponseEntity postAnswer(@Positive @PathVariable(name = "question_id") Long questionId,
		@Valid @RequestBody AnswerPostDto answerPostDto) {
		Answer answer = Answer.builder()
			.content(answerPostDto.getContent())
			.question(questionService.findQuestion(questionId))
			.user(userService.findMember(1L))
			.build();

		answerService.createAnswer(answer);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("{answer_id}")
	public ResponseEntity patchAnswer(@Positive @PathVariable(name = "answer_id") Long answerId,
		@Valid @RequestBody AnswerPatchDto answerPatchDto) {
		Answer answer = Answer.builder()
			.id(answerId)
			.content(answerPatchDto.getContent())
			.build();

		answerService.updateAnswer(answer);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("{answer_id}")
	public ResponseEntity deleteAnswer(@Positive @PathVariable(name = "answer_id") Long answerId) {
		answerService.deleteAnswer(answerId);

		return ResponseEntity.noContent().build();
	}
}
