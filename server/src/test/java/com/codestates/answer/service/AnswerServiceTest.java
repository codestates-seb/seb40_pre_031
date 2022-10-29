package com.codestates.answer.service;

import javax.transaction.Transactional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest()
class AnswerServiceTest {
	@Autowired
	private AnswerService answerService;

	@Test
	@DisplayName("답변 저장")
	void createAnswer() {
	}

}
