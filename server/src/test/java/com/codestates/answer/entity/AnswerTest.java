package com.codestates.answer.entity;

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
	}
}
