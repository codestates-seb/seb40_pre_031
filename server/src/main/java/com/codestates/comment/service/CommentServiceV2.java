package com.codestates.comment.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentServiceV2 {
	private final CommentRepository commentRepository;

	public Comment createComment(Comment comment) {
		return commentRepository.save(comment);
	}

	public Comment updateComment(Comment comment) {
		Comment found = findVerifiedComment(comment.getId());
		found.updateContent(comment.getContent());

		return commentRepository.save(found);
	}

	public void deleteComment(Comment comment) {
		commentRepository.delete(comment);
	}

	public Comment findVerifiedComment(Long commentId) {
		Optional<Comment> found = commentRepository.findById(commentId);

		return found.orElseThrow(() ->
			new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
	}

	public void checkCommentAuthor(Long authorId, Long loginId) {
		if (authorId.equals(loginId)) {
			throw new BusinessLogicException(ExceptionCode.NO_PERMISSION);
		}
	}
}
