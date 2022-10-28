package com.codestates.user.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.status.UserStatus;
import com.codestates.user.entity.User;
import com.codestates.user.repository.UserRepository;

@Service
public class UserService {
	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	// 회원 등록
	public User createUser(User user) {

		// 이미 존재하는 이메일인지 확인
		verifyExistsEmail(user.getEmail());

		return userRepository.save(user);
	}

	// 회원 수정
	public User updateUser(User user) {
		User findUser = findVerifiedUser(user.getId());

		if (findUser.getUserStatus() == UserStatus.USER_OUT|| findUser.getUserStatus() == UserStatus.ADMIN) {
			throw new BusinessLogicException(ExceptionCode.OUT_OF_CONTROL);
		} else {
			// 수정하기
			Optional.ofNullable(user.getPassword()).ifPresent(password -> findUser.setPassword(password));
			Optional.ofNullable(user.getDisplayName()).ifPresent(displayName -> findUser.setDisplayName(displayName));

			// 상태 수정 -> ACTIVE, DORMANT 둘 중 하나여야 함.
			Optional.ofNullable(user.getUserStatus()).ifPresent(userStatus -> findUser.setUserStatus(userStatus));

			return userRepository.save(findUser);
		}
	}

	// 회원 조회
	public User findMember(long userId) {

		return findVerifiedUser(userId);
	}

	// 회원 삭제 --> 상태를 바꾸는 메서드로 구현할 것
	public User deleteUser(long userId) {
		// 회원 존재 확인
		User findUser = findVerifiedUser(userId);

		// 해당 회원 상태를 USER_OUT 으로 변경
		findUser.setUserStatus(UserStatus.USER_OUT);

		return userRepository.save(findUser);
	}

	// 유효한 이메일인지 검증
	public void verifyExistsEmail(String email) {
		Optional<User> optionalUser = userRepository.findByEmail(email);

		if (optionalUser.isPresent()) {
			throw new RuntimeException();
		}
	}

	// 존재하는 회원인지 확인
	public User findVerifiedUser(long userId) {
		Optional<User> optionalUser = userRepository.findById(userId);
		User findUser = optionalUser.orElseThrow(() -> new RuntimeException("USER_NOT_FOUND"));

		return findUser;
	}
}
