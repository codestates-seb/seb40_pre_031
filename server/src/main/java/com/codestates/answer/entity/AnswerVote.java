package com.codestates.answer.entity;

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
	private AnswerVoteStatus answerVoteStatus = AnswerVoteStatus.NONE;

	// private User user;

	// private Answer answer;

	public enum AnswerVoteStatus {
		NONE("추천안함"),
		UP("추천"),
		DONW("비추천");

		private String status;

		AnswerVoteStatus(String status) {
			this.status = status;
		}
	}
}
