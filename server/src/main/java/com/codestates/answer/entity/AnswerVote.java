package com.codestates.answer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.codestates.status.VoteStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class AnswerVote {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "answer_vote_id")
	private Long id;

	@Column(nullable = false, length = 20)
	@Enumerated(EnumType.STRING)
	private VoteStatus status = VoteStatus.NONE;

	// private User user;

	// private Answer answer;
}
