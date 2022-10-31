package com.codestates.question.dto;

import com.codestates.question.entity.Question;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class QuestionResponseDto /* extends BaseTime */ {
	private Long questionId;
	private String title;
	private String content;

	public QuestionResponseDto(Question question) {
		questionId = question.getId();
		title = question.getTitle();
		content = question.getContent();
	}
}
