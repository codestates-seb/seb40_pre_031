package com.codestates.question.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.codestates.answer.dto.ResponseAnswerDto;
import com.codestates.status.VoteStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

/* 특정 질문 응답 */
@Getter
@AllArgsConstructor
public class ResponseSpecificQuestionDto {
	private Long questionId;
	private Long userId;
	private String title;
	private String content;
	private int views;
	private int votes;
	private VoteStatus status;
	private String displayName;
	private List<ResponseAnswerDto> answerList;
	private LocalDateTime createdAt;
	private LocalDateTime modifiedAt;
}
