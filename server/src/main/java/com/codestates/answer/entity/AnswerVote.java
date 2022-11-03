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

import com.codestates.global.auditing.BaseTime;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class AnswerVote extends BaseTime {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "answer_vote_id")
	private Long id;

	@Column(nullable = false, length = 20)
	@Enumerated(EnumType.STRING)
	private VoteStatus status = VoteStatus.NONE;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "answer_id")
	private Answer answer;

	@Builder
	public AnswerVote(VoteStatus status, User user, Answer answer) {
		this.status = status;
		this.user = user;
		this.answer = answer;
	}

	public void setUser(User user) {
		this.user = user;

		if (!user.getAnswerVoteList().contains(this)) {
			user.getAnswerVoteList().add(this);
		}
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;

		if (!answer.getAnswerVoteList().contains(this)) {
			answer.getAnswerVoteList().add(this);
		}
	}
}
