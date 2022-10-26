package com.codestates.exception;

import lombok.Getter;

public enum ExceptionCode {
	USER_EXIST(409, "User Exist");
	@Getter
	private int status;
	@Getter
	private String message;
	ExceptionCode(int status, String message) {
		this.status = status;
		this.message = message;
	}
}

