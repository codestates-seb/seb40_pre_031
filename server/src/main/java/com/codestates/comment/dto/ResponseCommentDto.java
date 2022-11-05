package com.codestates.comment.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResponseCommentDto {
	private Long commentId;
	private Long answerId;
	private Long userId;
	private String content;
	private String displayName;
	private LocalDateTime createdAt;
}
