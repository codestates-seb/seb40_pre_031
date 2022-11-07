package com.codestates.comment.controller;

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

import com.codestates.answer.service.AnswerService;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
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
		@Valid @RequestBody CommentPostDto commentPostDto,
		Principal principal) {

		Comment comment = buildComment(
			answerId,
			principal.getName(),
			commentPostDto.getContent()
		);
		commentService.createComment(comment);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("/{comment_id}")
	public ResponseEntity patchComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		@Valid @RequestBody CommentPatchDto commentPatchDto,
		Principal principal) {

		Comment comment = commentService.findVerifiedComment(commentId);
		checkCommentAuthor(
			comment.getUser().getEmail(),
			principal.getName()
		);
		CommentResponseDto response = commentMapper.commentToCommentResponseDto(
			commentService.updateVerifiedComment(comment));

		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping("{comment_id}")
	public ResponseEntity deleteComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		Principal principal) {
		Comment comment = commentService.findVerifiedComment(commentId);
		checkCommentAuthor(
			comment.getUser().getEmail(),
			principal.getName()
		);
		commentService.deleteVerifiedComment(comment);

		return ResponseEntity.noContent().build();
	}

	private Comment buildComment(Long answerId, String email, String content) {
		Comment comment = Comment.builder()
			.content(content)
			.build();
		comment.setAnswer(answerService.findVerifiedAnswer(answerId));
		comment.setUser(userService.findUserByEmail(email));

		return comment;
	}

	private void checkCommentAuthor(String authorEmail, String loginEmail) {
		if (!authorEmail.equals(loginEmail)) {
			throw new BusinessLogicException(ExceptionCode.NO_PERMISSION);
		}
	}
}
