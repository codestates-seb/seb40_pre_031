package com.codestates.auth.utils;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthorityUtils {
	@Value("${mail.address.admin}")
	private String adminMailAddress;

	private final List<GrantedAuthority> adminRoles = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_USER");
	private final List<GrantedAuthority> userRoles = AuthorityUtils.createAuthorityList("ROLE_USER");
	private final List<String> adminRolesString = List.of("ADMIN", "USER");
	private final List<String> userRolesString = List.of("USER");

	public List<GrantedAuthority> createAuthorities(String email) {
		if (email.equals(adminMailAddress)) {
			return adminRoles;
		}

		return userRoles;
	}

	public List<GrantedAuthority> createAuthorities(List<String> roles) {
		List<GrantedAuthority> authorities = roles.stream()
			.map(role -> new SimpleGrantedAuthority("ROLE_" + role))
			.collect(Collectors.toList());

		return authorities;
	}

	public List<String> createRoles(String email) {
		if (email.equals(adminMailAddress)) {
			return adminRolesString;
		}

		return userRolesString;
	}
}
