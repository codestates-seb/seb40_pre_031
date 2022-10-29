package com.codestates.comment.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommentService {
	private final CommentRepository commentRepository;

	public void createComment(Comment comment) {
		commentRepository.save(comment);
	}

	public void updateComment(Long commentId, String content) {
		Comment found = findVerifiedComment(commentId);
		found.setContent(content);

		commentRepository.save(found);
	}

	public Comment findVerifiedComment(Long commentId) {
		Optional<Comment> found = commentRepository.findById(commentId);

		return found.orElseThrow(() ->
			new RuntimeException("COMMENT_NOT_FOUND"));
	}
}
