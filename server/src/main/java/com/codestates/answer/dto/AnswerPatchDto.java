package com.codestates.answer.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;

@Getter
public class AnswerPatchDto {
	private final String content;

	@JsonCreator
	public AnswerPatchDto(@JsonProperty("content") String content) {
		this.content = content;
	}
}
