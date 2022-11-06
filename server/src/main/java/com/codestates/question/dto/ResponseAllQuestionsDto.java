package com.codestates.question.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResponseAllQuestionsDto {
	private Long questionId;
	private Long userId;
	private Long chosenAnswerId;
	private String title;
	private String content;
	private int votes;
	private int answers;
	private int views;
	private String displayName;
	private String avatarColor;
	private LocalDateTime createdAt;
}
