package com.codestates.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.codestates.answer.dto.ResponseAnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.comment.mapper.CommentMapper;

@Mapper(componentModel = "spring", uses = CommentMapper.class)
public interface AnswerMapper {
	@Mapping(source = "id", target = "answerId")
	@Mapping(source = "user.id", target = "userId")
	@Mapping(source = "question.id", target = "questionId")
	@Mapping(source = "user.displayName", target = "displayName")
	ResponseAnswerDto answerToResponseAnswerDto(Answer answer);
}
