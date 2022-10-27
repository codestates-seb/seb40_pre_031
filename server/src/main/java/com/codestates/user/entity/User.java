package com.codestates.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.codestates.status.UserStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "USERS")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USER_ID")
	private Long id;
	@Column(nullable = false, updatable = false, unique = true)
	private String email;
	@Column(length = 30, nullable = false)
	private String password;
	@Column(length = 50, nullable = false)
	private String displayName;
	@Enumerated(EnumType.STRING)
	@Column(length = 20, nullable = false)
	private UserStatus usersStatus = UserStatus.USER_ACTIVE;

	public User(String email, String password, String displayName) {
		this.email = email;
		this.password = password;
		this.displayName = displayName;
	}
}
