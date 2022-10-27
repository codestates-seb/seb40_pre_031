package com.codestates.question.entity;

import java.util.ArrayList;
import java.util.List;

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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.codestates.answer.entity.Answer;
import com.codestates.user.entity.User;

import com.codestates.global.auditing.Basetime;

import com.codestates.status.PostStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Basetime {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private Long id;


	@Column(nullable = false)
	private String title;

	@Column(columnDefinition = "text", nullable = false)
	private String content;

	@Column(nullable = false)
	private Integer view = 0;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 20)
	private PostStatus status = PostStatus.PUBLIC;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "question")
	private List<Answer> answerList = new ArrayList<>();

	@OneToOne(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	private QuestionVote questionVote;

	public void setUser(User user) {
		this.user = user;
	}

	public void addAnswer(Answer answer) {
		answerList.add(answer);

		if (answer.getQuestion() != this) {
			answer.setQuestion(this);
		}
	}

	public void setQuestionVote(QuestionVote questionVote) {
		this.questionVote = questionVote;

		if (questionVote.getQuestion() != this) {
			questionVote.setQuestion(this);
		}
	}
}
