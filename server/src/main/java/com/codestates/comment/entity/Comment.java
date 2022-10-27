package com.codestates.comment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.codestates.global.auditing.Basetime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Comment extends Basetime {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id")
	private Long id;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String Content;

	@Column(nullable = false, length = 20)
	@Enumerated(EnumType.STRING)
	private CommentStatus commentStatus = CommentStatus.PUBLIC;

	// private User user;

	// private Answer answer;
}

