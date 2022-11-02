package com.codestates.answer.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;

@Getter
public class AnswerPostDto {
	private String content;

	@JsonCreator
	public AnswerPostDto(@JsonProperty("content") String content) {
		this.content = content;
	}
}
