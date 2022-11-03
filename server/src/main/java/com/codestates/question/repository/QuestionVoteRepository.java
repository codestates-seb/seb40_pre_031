package com.codestates.question.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codestates.question.entity.Question;
import com.codestates.question.entity.QuestionVote;
import com.codestates.user.entity.User;

@Repository
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
	Optional<QuestionVote> findByQuestionAndUser(Question question, User user);
}
