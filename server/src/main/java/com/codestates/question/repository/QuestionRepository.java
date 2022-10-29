package com.codestates.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codestates.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
	/* pagination */
}
