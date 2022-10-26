package com.codestates.users.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long usersId;
	@Column(nullable = false, updatable = false, unique = true)
	private String email;
	@Column(length = 30, nullable = false)
	private String password;
	@Column(length = 50, nullable = false)
	private String displayName;
	@Enumerated(EnumType.STRING)
	@Column(length = 20, nullable = false)
	private UsersStatus usersStatus = UsersStatus.USERS_ACTIVE;

	public Users(String email, String password, String displayName) {
		this.email = email;
		this.password = password;
		this.displayName = displayName;
	}

	public enum UsersStatus {
		USERS_ACTIVE("회원 활동 중"),
		USERS_DORMANT("회원 휴면"),
		USERS_OUT("회원 탈퇴");

		@Getter
		private String status;

		UsersStatus(String status) {
			this.status = status;
		}
	}
}
