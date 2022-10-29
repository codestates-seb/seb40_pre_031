package com.codestates.answer.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.service.AnswerService;
import com.codestates.question.entity.Question;
import com.codestates.user.entity.User;

import groovy.util.logging.Slf4j;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v1/questions/{question_id}/answers/")
@Validated
@RequiredArgsConstructor
@Slf4j
public class AnswerController {
	private final AnswerService answerService;

	@PostMapping("")
	public ResponseEntity postAnswer(@PathVariable(name = "question_id") Long questionId,
		@Valid @RequestBody AnswerPostDto answerPostDto) {
		User user = new User("saintho95@gmail.com", "abcd1234%^&*", "성호");
		user.setId(answerPostDto.getUserId());

		Question question = new Question();
		question.setId(questionId);

		Answer answer = new Answer();
		answer.setContent(answerPostDto.getContent());
		// answer.setUser(user);
		// answer.setQuestion(question);

		answerService.createAnswer(answer);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
