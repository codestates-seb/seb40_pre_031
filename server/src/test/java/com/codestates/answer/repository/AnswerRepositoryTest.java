package com.codestates.answer.repository;

import static org.assertj.core.api.Assertions.*;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.codestates.answer.entity.Answer;

@DataJpaTest
class AnswerRepositoryTest {
	@Autowired
	private AnswerRepository answerRepository;
	private final Long id = 1L;
	private final String content = "테스트";

	@BeforeEach
	void init() {
		Answer answer = new Answer();
		answer.setContent(content);
		answerRepository.save(answer);
	}

	@Test
	@DisplayName("답변 저장")
	void saveAnswer() {
		Answer answer = new Answer();
		answer.setContent(content);

		Answer savedAnswer = answerRepository.save(answer);

		assertThat(savedAnswer)
			.isNotNull();
		assertThat(savedAnswer.getId())
			.isEqualTo(id + 1);
		assertThat(savedAnswer.getContent())
			.isEqualTo(content);
	}

	@Test
	@DisplayName("답벼 ID로 답변 조회")
	void findById() {
		Optional<Answer> found = answerRepository.findById(id);
		assertThat(found.isPresent())
			.isTrue();

		Answer actual = found.get();

		assertThat(actual.getId())
			.isEqualTo(id);
		assertThat(actual.getContent())
			.isEqualTo(content);
	}

	@Test
	@DisplayName("전체 답변 조회")
	void findByAll() {
		List<Answer> answerList = answerRepository.findAll();

		assertThat(answerList.size())
			.isEqualTo(1);
		assertThat(answerList.get((int)(id - 1)).getId())
			.isEqualTo(id);
		assertThat(answerList.get((int)(id - 1)).getContent())
			.isEqualTo(content);
	}
}
