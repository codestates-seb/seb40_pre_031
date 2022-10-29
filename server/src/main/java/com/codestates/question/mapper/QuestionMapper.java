package com.codestates.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import com.codestates.question.dto.QuestionPatchDto;
import com.codestates.question.dto.QuestionPostDto;
import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.entity.Question;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
	Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

	Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

	@Mapping(source = "id", target = "questionId")
	QuestionResponseDto questionToQuestionResponseDto(Question question);
}
