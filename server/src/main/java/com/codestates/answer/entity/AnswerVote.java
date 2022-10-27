package com.codestates.answer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.codestates.user.entity.User;

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

	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private User user;

	@OneToOne
	@JoinColumn(name = "ANSWER_ID")
	private Answer answer;

	public enum AnswerVoteStatus {
		NONE("추천안함"),
		UP("추천"),
		DONW("비추천");

		private String status;

		AnswerVoteStatus(String status) {
			this.status = status;
		}
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;

		if (answer.getAnswerVote() != this) {
			answer.setAnswerVote(this);
		}
	}
}
