package com.codestates.user.controller;

import java.security.Principal;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.auth.UsersDetailService;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.user.dto.UserPatchDto;
import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import com.codestates.user.entity.User;
import com.codestates.user.mapper.UserMapper;
import com.codestates.user.service.UserService;

import lombok.extern.slf4j.Slf4j;

// @CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true", maxAge = 5000L)
@RestController
@RequestMapping("/")
@Validated
@Slf4j
public class UserController {
	private final UserService userService;
	private final UserMapper mapper;

	public UserController(UserService userService, UserMapper mapper) {
		this.userService = userService;
		this.mapper = mapper;
	}

	// 로그인, 로그아웃 구현

	// 회원 가입
	@PostMapping("/signup")
	public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
		log.info("이메일 : {}", userPostDto.getEmail());
		log.info("이름 : {}", userPostDto.getDisplayName());
		log.info("비밀번호 : {}", userPostDto.getPassword());
		User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));
		UserResponseDto response = mapper.userToUserResponseDto(user);

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	// 회원 조회 --> 마이 페이지
	@GetMapping("/users/{user_id}")
	public ResponseEntity getUser(@PathVariable("user_id") @Positive long userId, Principal principal) {

		// 로그인 유저 != 접근 하려는 유저 --> 403 에러
		User findUser = userService.findUserByEmail(principal.getName());
		if (findUser.getId() != userId) {
			System.out.println("점근하려는 사용자 ID : " + findUser.getId());
			System.out.println("해당 페이지 사용자 ID : " + userId);
			throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		}
		UserResponseDto responseDto = mapper.userToUserResponseDto(userService.findMember(userId));

		return new ResponseEntity<>(responseDto, HttpStatus.OK);
	}

	// 마이 페이지 --> 수정
	@PatchMapping("/users/{user_id}")
	public ResponseEntity patchUser(@PathVariable("user_id") @Positive long userId,
		@Valid @RequestBody UserPatchDto userPatchDto,
		Principal principal) {

		// 로그인 유저 != 접근 하려는 유저 --> 403 에러
		User findUser = userService.findUserByEmail(principal.getName());
		if (findUser.getId() != userId) {
			throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		}

		userPatchDto.setId(userId);
		User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));
		UserResponseDto response = mapper.userToUserResponseDto(user);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	// 회원 정보 삭제 --> 상태 변경 메서드 구현함
	@DeleteMapping("/users/{user_id}")
	public ResponseEntity deleteUser(@PathVariable("user_id") @Positive long userId,
		Principal principal) {

		// 로그인 유저 != 접근 하려는 유저 --> 403 에러
		User findUser = userService.findUserByEmail(principal.getName());
		if (findUser.getId() != userId) {
			throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		}

		User user = userService.deleteUser(userId);
		UserResponseDto response = mapper.userToUserResponseDto(user);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
