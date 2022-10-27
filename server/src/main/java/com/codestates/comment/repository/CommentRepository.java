package com.codestates.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codestates.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
