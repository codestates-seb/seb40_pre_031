package com.codestates.comment.mapper;

import org.mapstruct.Mapper;

import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;

@Mapper(componentModel = "spring")
public interface CommentMapper {
	CommentResponseDto commentToCommentResponseDto(Comment comment);
}
