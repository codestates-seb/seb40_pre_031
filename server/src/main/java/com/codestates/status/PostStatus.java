package com.codestates.status;

public enum PostStatus {

	PUBLIC("공개"),
	PRIVATE("비공개");

	private final String status;

	PostStatus(String status) {
		this.status = status;
	}
}
