package com.codestates.user.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.entity.AnswerVote;
import com.codestates.question.entity.Question;
import com.codestates.question.entity.QuestionVote;

import com.codestates.global.auditing.Basetime;

import com.codestates.status.UserStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "USERS")
public class User extends Basetime {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;

	@Column(nullable = false, updatable = false, unique = true)
	private String email;

	@Column(length = 30, nullable = false)
	private String password;

	@Column(length = 50, nullable = false)
	private String displayName;

	@Enumerated(EnumType.STRING)
	@Column(length = 20, nullable = false)
	private UserStatus usersStatus = UserStatus.USER_ACTIVE;

	@OneToMany(mappedBy = "user")
	private List<Question> questionList = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<Answer> answerList = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<QuestionVote> questionVoteList = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<AnswerVote> answerVoteList = new ArrayList<>();

	public void addQuestion(Question question) {
		questionList.add(question);

		if (question.getUser() != this) {
			question.setUser(this);
		}
	}

	public void addAnswers(Answer answer) {
		answerList.add(answer);

		if (answer.getUser() != this) {
			answer.setUser(this);
		}
	}

	public void addQuestionVote(QuestionVote questionVote) {
		questionVoteList.add(questionVote);

		if (questionVote.getUser() != this) {
			questionVote.setUser(this);
		}
	}

	public void addAnswerVote(AnswerVote answerVote) {
		answerVoteList.add(answerVote);

		if (answerVote.getUser() != this) {
			answerVote.setUser(this);
		}
	}

	public User(String email, String password, String displayName) {
		this.email = email;
		this.password = password;
		this.displayName = displayName;
	}
}
