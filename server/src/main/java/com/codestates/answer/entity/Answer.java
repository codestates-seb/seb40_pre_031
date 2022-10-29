package com.codestates.answer.entity;

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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.codestates.comment.entity.Comment;
import com.codestates.global.auditing.BaseTime;
import com.codestates.question.entity.Question;
import com.codestates.status.PostStatus;
import com.codestates.user.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Answer extends BaseTime {

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
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "question_id")
	private Question question;

	@OneToMany(mappedBy = "answer")
	private List<Comment> commentList = new ArrayList<>();

	@OneToMany(mappedBy = "answer")
	private List<AnswerVote> answerVoteList = new ArrayList<>();

	public void setUser(User user) {
		this.user = user;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public void addComment(Comment comment) {
		commentList.add(comment);

		if (comment.getAnswer() != this) {
			comment.setAnswer(this);
		}
	}

	public void addAnswerVote(AnswerVote answerVote) {
		answerVoteList.add(answerVote);

		if (answerVote.getAnswer() != this) {
			answerVote.setAnswer(this);
		}
	}
}
