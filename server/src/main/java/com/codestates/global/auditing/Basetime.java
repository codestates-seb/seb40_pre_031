package com.codestates.global.auditing;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Basetime {
	/* 생성 시간 */
	@CreatedDate
	@Column(updatable = false)
	private LocalDateTime createAT;

	/* 수정 시간 */
	@LastModifiedDate
	private LocalDateTime modifiedAt;
}