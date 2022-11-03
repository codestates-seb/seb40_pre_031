package com.codestates.answer.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
class AnswerRepositoryTest {
	@Autowired
	private AnswerRepository answerRepository;
	private final Long id = 1L;
	private final String content = "테스트";

	@BeforeEach
	void init() {
	}

	@Test
	@DisplayName("답변 저장")
	void saveAnswer() {
	}

	@Test
	@DisplayName("답벼 ID로 답변 조회")
	void findById() {
	}

	@Test
	@DisplayName("전체 답변 조회")
	void findByAll() {
	}
}
