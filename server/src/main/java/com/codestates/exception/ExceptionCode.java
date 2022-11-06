package com.codestates.exception;

import lombok.Getter;

public enum ExceptionCode {
	USER_EXIST(409, "중복된 이메일입니다."),
	FORBIDDEN(403, "Forbidden"),
	USER_NOT_FOUND(404, "회원이 존재하지 않습니다."),
	QUESTION_NOT_FOUND(404, "질문을 찾을 수 없습니다."),
	ANSWER_NOT_FOUND(404, "답변을 찾을 수 없습니다."),
	COMMENT_NOT_FOUND(404, "댓글을 찾을 수 없습니다."),
	WRONG_ID(404, "잘못된 접근입니다."),
	NO_PERMISSION(403, "NO PERMISSION TO EDIT"),
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

