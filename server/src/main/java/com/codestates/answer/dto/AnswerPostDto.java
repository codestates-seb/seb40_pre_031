package com.codestates.answer.dto;

import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AnswerPostDto {
	@Positive
	private Long userId;

	private String content;
}
