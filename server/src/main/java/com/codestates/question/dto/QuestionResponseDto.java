package com.codestates.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class QuestionResponseDto {
	private Long questionId;
	private String title;
	private String content;
}
