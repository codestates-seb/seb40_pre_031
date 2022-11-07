package com.codestates.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import com.codestates.answer.dto.ResponseAnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.comment.mapper.CommentMapper;

@Mapper(componentModel = "spring", uses = CommentMapper.class,
	unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
	@Mapping(source = "id", target = "answerId")
	@Mapping(source = "user.id", target = "userId")
	@Mapping(source = "question.id", target = "questionId")
	@Mapping(source = "user.displayName", target = "displayName")
	@Mapping(source = "user.avatarColor", target = "avatarColor")
	ResponseAnswerDto answerToResponseAnswerDto(Answer answer);
}
