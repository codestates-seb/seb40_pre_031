package com.codestates.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionResponseDto {
	private Long questionId;
	private String title;
	private String content;
}
