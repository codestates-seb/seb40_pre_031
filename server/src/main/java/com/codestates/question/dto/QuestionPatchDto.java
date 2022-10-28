package com.codestates.question.dto;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class QuestionPatchDto {
	private Long userId;
	private Long questionId;

	@NotBlank(message = "제목을 입력해 주세요.")
	private String title;

	@NotBlank(message = "내용을 입력해 주세요.")
	private String content;
}
