package com.codestates.answer.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.codestates.comment.dto.ResponseCommentDto;
import com.codestates.status.VoteStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ResponseAnswerDto {
	private Long answerId;
	private Long questionId;
	private Long userId;
	private String content;
	private int votes;
	private VoteStatus voteStatus;
	private String displayName;
	private String avatarColor;
	private List<ResponseCommentDto> commentList;
	private LocalDateTime createdAt;
	private LocalDateTime modifiedAt;
}
