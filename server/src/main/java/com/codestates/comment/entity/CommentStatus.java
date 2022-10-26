package com.codestates.comment.entity;

public enum CommentStatus {
	PUBLIC("공개"),
	PRIVATE("비공개");

	private String status;

	CommentStatus(String status) {
		this.status = status;
	}
}
