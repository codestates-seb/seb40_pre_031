package com.codestates.user.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserPostDto {
	@Pattern(regexp = "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",
		message = "잘못된 이메일 주소입니다.")
	private String email;

	@Pattern(regexp = "^.*(?=^.{8,20}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$",
		message = "비밀번호는 숫자, 문자, 특수문자 포함 8~20자리 이내로 구성해야합니다.")
	private String password;

	@NotBlank(message = "이름은 공백이 아니어야합니다.")
	private String displayName;
}
