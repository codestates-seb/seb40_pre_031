package com.codestates.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codestates.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
