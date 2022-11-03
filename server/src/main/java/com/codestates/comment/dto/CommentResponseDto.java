package com.codestates.comment.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CommentResponseDto {
	private final LocalDateTime createdAt;
	private final LocalDateTime modifiedAt;
}
