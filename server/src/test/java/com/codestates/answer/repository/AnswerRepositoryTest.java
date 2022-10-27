package com.codestates.answer.repository;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.codestates.answer.entity.Answer;

@DataJpaTest
class AnswerRepositoryTest {

	@Autowired
	private AnswerRepository answerRepository;

	@Test
	@DisplayName("답변 저장")
	void saveAnswer() {
		Answer answer = new Answer();
		answer.setId(1L);
		answer.setContent("테스트");

		Answer savedAnswer = answerRepository.save(answer);

		assertThat(savedAnswer)
			.isNotNull();
	}
}
