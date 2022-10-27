package com.codestates.answer.entity;

import javax.persistence.CascadeType;
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

import com.codestates.question.entity.Question;
import com.codestates.user.entity.User;

import com.codestates.global.auditing.Basetime;

import com.codestates.status.PostStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Answer extends Basetime {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "answer_id")
	private Long id;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String content;

	@Column(nullable = false, length = 20)
	@Enumerated(EnumType.STRING)
	private PostStatus status = PostStatus.PUBLIC;

	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private User user;

	@ManyToOne
	@JoinColumn(name = "QUESTION_ID")
	private Question question;

	@OneToOne(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	private AnswerVote answerVote;

	public void setUser(User user) {
		this.user = user;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public void setAnswerVote(AnswerVote answerVote) {
		this.answerVote = answerVote;

		if (answerVote.getAnswer() != this) {
			answerVote.setAnswer(this);
		}
	}
}
