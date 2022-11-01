package com.codestates.answer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codestates.answer.entity.AnswerVote;

@Repository
public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
	Optional<AnswerVote> findByAnswerIdAndUserId(Long answerId, Long userId);
}
