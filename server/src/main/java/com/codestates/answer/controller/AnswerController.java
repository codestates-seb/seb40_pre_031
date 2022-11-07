package com.codestates.answer.controller;

import java.security.Principal;

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
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.question.service.QuestionService;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

// @CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true", maxAge = 5000L)
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
		@Valid @RequestBody AnswerPostDto answerPostDto,
		Principal principal) {

		Answer answer = buildAnswer(
			questionId,
			principal.getName(),
			answerPostDto.getContent()
		);
		answerService.createAnswer(answer);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("{answer_id}")
	public ResponseEntity patchAnswer(@Positive @PathVariable(name = "answer_id") Long answerId,
		@Valid @RequestBody AnswerPatchDto answerPatchDto,
		Principal principal) {

		Answer answer = answerService.findVerifiedAnswer(answerId);
		checkAnswerAuthor(
			answer.getUser().getEmail(),
			principal.getName()
		);
		answer.updateContent(answerPatchDto.getContent());

		answerService.updateVerifiedAnswer(answer);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("{answer_id}")
	public ResponseEntity deleteAnswer(@Positive @PathVariable(name = "answer_id") Long answerId, Principal principal) {
		Answer answer = answerService.findVerifiedAnswer(answerId);
		checkAnswerAuthor(
			answer.getUser().getEmail(),
			principal.getName()
		);
		answerService.deleteVerifiedAnswer(answer);

		return ResponseEntity.noContent().build();
	}

	private Answer buildAnswer(Long questionId, String email, String content) {
		Answer answer = Answer.builder()
			.content(content)
			.build();
		answer.setQuestion(questionService.findQuestion(questionId));
		answer.setUser(userService.findUserByEmail(email));

		return answer;
	}

	private void checkAnswerAuthor(String authorEmail, String loginEmail) {
		if (!authorEmail.equals(loginEmail)) {
			throw new BusinessLogicException(ExceptionCode.NO_PERMISSION);
		}
	}
}
