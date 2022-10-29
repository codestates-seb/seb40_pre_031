package com.codestates.comment.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.service.CommentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v1/questions/{question_id}/answers/{answer_id}/comments/")
@Validated
@RequiredArgsConstructor
public class CommentControllerV1 {
	private final CommentService commentService;

	@PostMapping("")
	public ResponseEntity postComment(@Positive @PathVariable(name = "question_id") Long questionId,
		@Positive @PathVariable(name = "answer_id") Long answerId,
		@Valid @RequestBody CommentPostDto commentPostDto) {
		Comment comment = new Comment();
		comment.setContent(commentPostDto.getContent());

		commentService.createComment(comment);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
