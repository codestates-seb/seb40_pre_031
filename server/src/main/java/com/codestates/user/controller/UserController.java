package com.codestates.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserController {
	// 로그인, 로그 아웃 구현 --> Spring Security

	// 회원 가입
	public ResponseEntity postUser() {
		return null;
	}

	// 회원조회 --> 마이페이지
	public ResponseEntity getUser() {
		return null;
	}

	// 마이페이지 --> 회원 정보 수정
	public ResponseEntity patchUser() {
		return null;
	}

	// 회원 삭제
	public ResponseEntity deleteUser() {
		return null;
	}
}
