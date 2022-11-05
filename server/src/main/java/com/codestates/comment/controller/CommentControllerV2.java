package com.codestates.comment.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
import com.codestates.auth.UsersDetailService;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentServiceV2;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/v2/questions/{question_id}/answers/{answer_id}/comments/")
@Validated
@RequiredArgsConstructor
public class CommentControllerV2 {
	private final CommentServiceV2 commentService;
	private final AnswerService answerService;
	private final UserService userService;
	private final CommentMapper commentMapper;

	@PostMapping("")
	public ResponseEntity postComment(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail,
		@Valid @RequestBody CommentPostDto commentPostDto) {
		Comment comment = buildPostComment(
			answerId,
			usersDetail.getId(),
			commentPostDto.getContent()
		);

		commentService.createComment(comment);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("/{comment_id}")
	public ResponseEntity patchComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail,
		@Valid @RequestBody CommentPatchDto commentPatchDto) {
		Comment comment = buildPatchComment(
			commentId,
			usersDetail.getId(),
			commentPatchDto.getContent()
		);

		CommentResponseDto response = commentMapper.commentToCommentResponseDto(
			commentService.updateComment(comment)
		);

		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping("{comment_id}")
	public ResponseEntity deleteComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail) {
		Comment comment = buildDeleteComment(
			commentId,
			usersDetail.getId()
		);
		commentService.deleteComment(comment);

		return ResponseEntity.noContent().build();
	}

	private Comment buildPostComment(Long answerId, Long loginId, String content) {
		Comment comment = Comment.builder()
			.content(content)
			.build();
		comment.setAnswer(answerService.findVerifiedAnswer(answerId));
		comment.setUser(userService.findMember(loginId));

		return comment;
	}

	private Comment buildPatchComment(Long commentId, Long loginId, String content) {
		Comment comment = commentService.findVerifiedComment(commentId);
		commentService.checkCommentAuthor(
			comment.getUser().getId(),
			loginId
		);
		comment.updateContent(content);

		return comment;
	}

	private Comment buildDeleteComment(Long commentId, Long loginId) {
		Comment comment = commentService.findVerifiedComment(commentId);
		commentService.checkCommentAuthor(
			comment.getUser().getId(),
			loginId
		);

		return comment;
	}
}
