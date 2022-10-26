package com.codestates.question.entity;

public enum QuestionStatus {
	PUBLIC("공개"),
	PRIVATE("비공개");

	private final String status;

	QuestionStatus(String status) {
		this.status = status;
	}
}
