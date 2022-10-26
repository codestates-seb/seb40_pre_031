package com.codestates.question.entity;

public enum QuestionVoteStatus {
	UP("추천"),
	NONE("상태없음"),
	DOWN("비추천");

	private final String status;

	QuestionVoteStatus(String status) {
		this.status = status;
	}
}
