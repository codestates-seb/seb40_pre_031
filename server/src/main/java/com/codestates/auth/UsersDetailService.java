package com.codestates.auth;

import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.codestates.auth.utils.CustomAuthorityUtils;
import com.codestates.user.entity.User;
import com.codestates.user.repository.UserRepository;

@Component
public class UsersDetailService implements UserDetailsService {
	private final UserRepository userRepository;
	private final CustomAuthorityUtils authorityUtils;

	public UsersDetailService(UserRepository userRepository, CustomAuthorityUtils authorityUtils) {
		this.userRepository = userRepository;
		this.authorityUtils = authorityUtils;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optionalUser = userRepository.findByEmail(username);
		User findUser = optionalUser.orElseThrow(() -> new UsernameNotFoundException("사용자가 존재하지 않습니다."));

		return new UsersDetail(findUser);
	}

	public final class UsersDetail extends User implements UserDetails {
		UsersDetail(User user) {
			setId(user.getId());
			setDisplayName(user.getDisplayName());
			setEmail(user.getEmail());
			setPassword(user.getPassword());
			setAvatarColor(user.getAvatarColor());
			setRoles(user.getRoles());
		}

		@Override
		public Collection<? extends GrantedAuthority> getAuthorities() {
			return authorityUtils.createAuthorities(this.getRoles());
		}

		@Override
		public String getUsername() {
			return getEmail();
		}

		@Override
		public boolean isAccountNonExpired() {
			return true;
		}

		@Override
		public boolean isAccountNonLocked() {
			return true;
		}

		@Override
		public boolean isCredentialsNonExpired() {
			return true;
		}

		@Override
		public boolean isEnabled() {
			return true;
		}
	}
}
