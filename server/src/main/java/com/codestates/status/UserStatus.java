package com.codestates.status;

import lombok.Getter;

public enum UserStatus {
	USER_ACTIVE("회원 활동 중"),
	USER_DORMANT("회원 휴면"),
	USER_OUT("회원 탈퇴");

	@Getter
	private String status;

	UserStatus(String status) {
		this.status = status;
	}
}
