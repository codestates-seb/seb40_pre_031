package com.codestates.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codestates.answer.entity.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
