package com.codestates.answer.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codestates.answer.entity.AnswerVote;
import com.codestates.question.entity.Question;
import com.codestates.user.entity.User;

@Repository
public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
	Optional<AnswerVote> findByAnswerIdAndUserId(Long answerId, Long userId);

	List<AnswerVote> findByAnswer_QuestionAndUser(Question question, User user);
}
