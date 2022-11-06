package com.codestates.comment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.codestates.answer.entity.Answer;
import com.codestates.global.auditing.BaseTime;
import com.codestates.status.PostStatus;
import com.codestates.user.entity.User;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Getter
public class Comment extends BaseTime {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id")
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
	@JoinColumn(name = "answer_id")
	private Answer answer;

	@Builder
	public Comment(Long id, String content, User user, Answer answer) {
		this.id = id;
		this.content = content;
		this.user = user;
		this.answer = answer;
	}

	public void updateContent(String content) {
		this.content = content;
	}

	public void setUser(User user) {
		this.user = user;

		if (!user.getCommentList().contains(this)) {
			user.getCommentList().add(this);
		}
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;

		if (!answer.getCommentList().contains(this)) {
			answer.getCommentList().add(this);
		}
	}
}

