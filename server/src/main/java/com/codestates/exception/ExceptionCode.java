package com.codestates.exception;

import lombok.Getter;

public enum ExceptionCode {
	USER_EXIST(409, "User Exist"),
	OUT_OF_CONTROL(403, "Forbidden"),
	LOGIN_ERROR(401, "로그인에 실패하였습니다.");
	@Getter
	private int status;
	@Getter
	private String message;
	ExceptionCode(int status, String message) {
		this.status = status;
		this.message = message;
	}
}

