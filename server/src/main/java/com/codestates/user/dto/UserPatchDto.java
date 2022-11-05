package com.codestates.user.dto;

import com.codestates.status.UserStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserPatchDto {
	private long id;
	private String password;
	private String displayName;
	private UserStatus userStatus;
}
