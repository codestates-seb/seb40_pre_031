package com.codestates.user.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.codestates.user.dto.UserPatchDto;
import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import com.codestates.user.entity.User;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
	User userPostDtoToUser(UserPostDto userPostDto);

	User userPatchDtoToUser(UserPatchDto userPatchDto);

	UserResponseDto userToUserResponseDto(User user);

	List<UserResponseDto> userToUserResponseDtos(List<User> users);
}
