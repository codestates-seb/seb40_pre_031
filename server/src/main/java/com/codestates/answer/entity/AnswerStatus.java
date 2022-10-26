package com.codestates.answer.entity;

public enum AnswerStatus {
	PUBLIC("공개"),
	PRIVATE("비공개");

	private String status;

	AnswerStatus(String status) {
		this.status = status;
	}
}
