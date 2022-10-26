package com.codestates.question.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private Long id;

	// mapping 필요
	// private User user;

	@Column(nullable = false)
	private String title;

	@Column(columnDefinition = "text", nullable = false)
	private String content;

	@Column(nullable = false)
	private Integer view = 0;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 20)
	private QuestionStatus status;

}
