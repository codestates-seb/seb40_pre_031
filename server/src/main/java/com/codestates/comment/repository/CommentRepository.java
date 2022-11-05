package com.codestates.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codestates.comment.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
