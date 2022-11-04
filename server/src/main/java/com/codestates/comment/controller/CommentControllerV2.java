package com.codestates.comment.controller;

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

import com.codestates.answer.service.AnswerService;
import com.codestates.auth.UsersDetailService;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v2/questions/{question_id}/answers/{answer_id}/comments/")
@Validated
@RequiredArgsConstructor
public class CommentControllerV2 {
	private final CommentService commentService;
	private final AnswerService answerService;
	private final UserService userService;
	private final CommentMapper commentMapper;

	@PostMapping("")
	public ResponseEntity postComment(@Positive @PathVariable(name = "answer_id") Long answerId,
		@AuthenticationPrincipal UsersDetailService.UsersDetail usersDetail,
		@Valid @RequestBody CommentPostDto commentPostDto) {
		Comment comment = buildPostComment(answerId,
			usersDetail.getId(),
			commentPostDto.getContent());

		commentService.createComment(comment);

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PatchMapping("/{comment_id}")
	public ResponseEntity patchComment(@Positive @PathVariable(name = "comment_id") Long commentId,
		@Valid @RequestBody CommentPatchDto commentPatchDto) {
		Comment comment = buildPatchComment(commentId, commentPatchDto.getContent());

		CommentResponseDto response = commentMapper.commentToCommentResponseDto(
			commentService.updateComment(comment)
		);

		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping("{comment_id}")
	public ResponseEntity deleteComment(@Positive @PathVariable(name = "comment_id") Long commentId) {
		commentService.deleteComment(commentId);

		return ResponseEntity.noContent().build();
	}

	private Comment buildPostComment(Long answerId, Long userId, String content) {
		Comment comment = Comment.builder()
			.content(content)
			.build();
		comment.setAnswer(answerService.findVerifiedAnswer(answerId));
		comment.setUser(userService.findMember(userId));

		return comment;
	}

	private Comment buildPatchComment(Long commentId, String content) {
		return Comment.builder()
			.id(commentId)
			.content(content)
			.build();
	}
}
