package com.codestates.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import com.codestates.question.dto.QuestionPatchDto;
import com.codestates.question.dto.QuestionPostDto;
import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.dto.ResponseAllQuestionsDto;
import com.codestates.question.dto.ResponseSpecificQuestionDto;
import com.codestates.question.entity.Question;
import com.codestates.status.VoteStatus;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
	Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

	Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

	@Mapping(source = "id", target = "questionId")
	QuestionResponseDto questionToQuestionResponseDto(Question question);

	@Mapping(source = "question.id", target = "questionId")
	@Mapping(source = "question.user.id", target = "userId")
	@Mapping(source = "question.user.displayName", target = "displayName")
	ResponseSpecificQuestionDto questionToResponsePickOneDto(Question question, VoteStatus status);
}
