package com.codestates.status;

public enum VoteStatus {
	UP("추천"),
	NONE("상태없음"),
	DOWN("비추천");

	private final String status;

	VoteStatus(String status) {
		this.status = status;
	}
}
