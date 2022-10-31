package com.codestates.question.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.codestates.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
	Optional<Question> findById(Long userId);

	/* pagination */
	/* 생성시간으로 정렬 */
	@Query("select question from Question question order by question.createdAt desc")
	Page<Question> questionPage(Pageable pageable);
}
