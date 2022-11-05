package com.codestates.question.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.codestates.answer.entity.Answer;
import com.codestates.global.auditing.BaseTime;
import com.codestates.user.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends BaseTime {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private Long id;

	@Column(nullable = false)
	private String title;

	@Column(columnDefinition = "text", nullable = false)
	private String content;

	@Column(nullable = false)
	private Integer votes = 0;

	@Column(nullable = false)
	private Integer views = 0;

	private Long chosenAnswerId;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	private List<Answer> answerList = new ArrayList<>();

	@OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	private List<QuestionVote> questionVoteList = new ArrayList<>();

	public void setUser(User user) {
		this.user = user;
	}

	public void addAnswer(Answer answer) {
		answerList.add(answer);

		if (answer.getQuestion() != this) {
			answer.setQuestion(this);
		}
	}

	public void addQuestionVote(QuestionVote questionVote) {
		questionVoteList.add(questionVote);

		if (questionVote.getQuestion() != this) {
			questionVote.setQuestion(this);
		}
	}
}
