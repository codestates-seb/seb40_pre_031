package com.codestates.answer.service;

import static org.assertj.core.api.Assertions.*;

import javax.transaction.Transactional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.codestates.answer.entity.Answer;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest()
class AnswerServiceTest {
	@Autowired
	private AnswerService answerService;

	@Test
	@DisplayName("답변 저장")
	void createAnswer() {
		String content = "실행이 안 되면 파일을 지워보세용";

		Answer answer = new Answer();
		answer.setContent(content);

		Answer savedAnswer = answerService.createAnswer(answer);

		assertThat(savedAnswer.getId())
			.isEqualTo(1L);
		assertThat(savedAnswer.getContent())
			.isEqualTo(content);
	}

}
