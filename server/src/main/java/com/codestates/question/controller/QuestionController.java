package com.codestates.question.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
@Valid
public class QuestionController {
	/* DI */

	/* 질문글 등록 */
	@PostMapping("/ask")
	public ResponseEntity postQuestion() {

		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	/* 질문글 수정 */
	@PatchMapping("/{question_id}")
	public ResponseEntity patchQuestion(@Valid @Positive @PathVariable String question_id) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/* 특정 질문글 조회 */
	@GetMapping("/{question_id}")
	public ResponseEntity getQuestion(@Valid @Positive @PathVariable String question_id) {

		return new ResponseEntity<>(HttpStatus.OK);
	}

	/* 전체 질문글 조회 */
	@GetMapping
	public ResponseEntity getQuestions() {

		return new ResponseEntity<>(HttpStatus.OK);
	}

	/* 질문글 삭제*/
	@DeleteMapping("/{question_id}")
	public ResponseEntity deleteQuestion(@Valid @Positive @PathVariable String question_id) {

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
