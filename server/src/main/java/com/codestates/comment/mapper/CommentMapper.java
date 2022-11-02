package com.codestates.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.codestates.comment.dto.ResponseCommentDto;
import com.codestates.comment.entity.Comment;

@Mapper(componentModel = "spring")
public interface CommentMapper {
	@Mapping(source = "id", target = "commentId")
	@Mapping(source = "user.id", target = "userId")
	@Mapping(source = "answer.id", target = "answerId")
	@Mapping(source = "user.displayName", target = "displayName")
	ResponseCommentDto commentToResponseCommentDto(Comment comment);
}
