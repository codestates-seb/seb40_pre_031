package com.codestates.answer.entity;

import static org.assertj.core.api.Assertions.*;

import javax.transaction.Transactional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.codestates.answer.repository.AnswerRepository;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest()
class AnswerTest {

	@Autowired
	private AnswerRepository answerRepository;

	@Test
	@DisplayName("Auditing 테스트")
	void auditingTest() {
		Answer answer = new Answer();
		answer.setId(1L);
		answer.setContent("테스트");

		Answer savedAnswer = answerRepository.save(answer);

		assertThat(savedAnswer.getCreateAT())
			.isNotNull();
		assertThat(savedAnswer.getClass())
			.isNotNull();

		System.out.println("savedAnswer.getCreateAT() = " + savedAnswer.getCreateAT());
		System.out.println("savedAnswer.getModifiedAT() = " + savedAnswer.getModifiedAt());
	}
}
