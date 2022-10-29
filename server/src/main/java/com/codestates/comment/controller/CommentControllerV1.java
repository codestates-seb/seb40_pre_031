package com.codestates.comment.controller;

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

import com.codestates.comment.dto.CommentPatchDto;
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

	@PatchMapping("/{comment_id}")
	public ResponseEntity patchComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		@Valid @RequestBody CommentPatchDto commentPatchDto) {
		Comment updated = commentService.updateComment(commentId, commentPatchDto.getContent());

		return ResponseEntity.ok().body(updated);
	}

	@DeleteMapping("{comment_id}")
	public ResponseEntity deleteComment(@Positive @PathVariable(name = "comment_id") Long commentId) {
		commentService.deleteComment(commentId);

		return ResponseEntity.noContent().build();
	}
}
