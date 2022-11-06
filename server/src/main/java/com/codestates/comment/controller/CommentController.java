package com.codestates.comment.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.answer.service.AnswerService;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

// @CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true", maxAge = 5000L)
@RestController
@RequestMapping("/questions/{question_id}/answers/{answer_id}/comments/")
@Validated
@RequiredArgsConstructor
public class CommentController {
	private final CommentService commentService;
	private final AnswerService answerService;
	private final UserService userService;
	private final CommentMapper commentMapper;

	@PostMapping("")
	public ResponseEntity postComment(@Positive @PathVariable(name = "answer_id") Long answerId,
		@Valid @RequestBody CommentPostDto commentPostDto) {
		Comment comment = Comment.builder()
			.content(commentPostDto.getContent())
			.build();
		comment.setAnswer(answerService.findVerifiedAnswer(answerId));
		comment.setUser(userService.findMember(1L));

		commentService.createComment(comment);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("/{comment_id}")
	public ResponseEntity patchComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		@Valid @RequestBody CommentPatchDto commentPatchDto) {
		Comment comment = Comment.builder()
			.id(commentId)
			.content(commentPatchDto.getContent())
			.build();

		CommentResponseDto response = commentMapper.commentToCommentResponseDto(
			commentService.updateComment(comment));

		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping("{comment_id}")
	public ResponseEntity deleteComment(@Positive @PathVariable(name = "comment_id") Long commentId) {
		commentService.deleteComment(commentId);

		return ResponseEntity.noContent().build();
	}
}
