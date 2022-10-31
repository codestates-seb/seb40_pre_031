package com.codestates.comment.dto;

import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommentPostDto {
	@Positive
	private Long userId;

	private String content;
}
