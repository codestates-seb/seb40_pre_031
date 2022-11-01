package com.codestates.question.controller;

import java.util.UUID;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.question.dto.QuestionPatchDto;
import com.codestates.question.dto.QuestionPostDto;
import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.dto.ResponseSpecificQuestionDto;
import com.codestates.question.entity.Question;
import com.codestates.question.mapper.QuestionMapper;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.service.QuestionService;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
@Valid
public class QuestionController {
	/* DI */
	private final QuestionService questionService;
	private final QuestionRepository questionRepository;
	private final QuestionMapper mapper;

	/* 질문글 등록 */
	@PostMapping("/ask")
	public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
		User user = new User();
		user.setEmail(UUID.randomUUID() + "cheese@cat.com");
		user.setPassword("123~");
		user.setDisplayName("cheese");

		Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto), user);
		QuestionResponseDto response = mapper.questionToQuestionResponseDto(question);

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	/* 질문글 수정 */
	@PatchMapping("/{question_id}")
	public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive Long questionId,
		@Valid @RequestBody QuestionPatchDto questionPatchDto) {
		Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
		question.setId(questionId);

		Question updatedQuestion = questionService.updateQuestion(question);

		QuestionResponseDto response = mapper.questionToQuestionResponseDto(updatedQuestion);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	/* 특정 질문글 조회 */
	@GetMapping("/{question_id}")
	public ResponseEntity<ResponseSpecificQuestionDto> getQuestion(
		@PathVariable("question_id") @Positive Long questionId) {
		Question question = questionService.findQuestion(questionId);

		User user = new User();
		user.setEmail(UUID.randomUUID() + "cheese@cat.com");
		user.setPassword("123~");
		user.setDisplayName("cheese");

		VoteStatus voteStatus = questionService.checkUserVoteStatus(question, user);
		ResponseSpecificQuestionDto response = mapper.questionToResponsePickOneDto(question, voteStatus);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	/* 전체 질문글 조회 */
	@GetMapping
	public Page<QuestionResponseDto> getQuestions(Pageable pageable) {

		Page<Question> pageQuestions = questionRepository.questionPage(pageable);

		Page<QuestionResponseDto> response = pageQuestions.map(question ->
			new QuestionResponseDto(question));
		return response;
	}

	/* 질문글 삭제 */
	@DeleteMapping("/{question_id}")
	public String deleteQuestion(@PathVariable("question_id") @Positive Long questionId) {
		questionService.deleteQuestion(questionId);

		return "success to delete!";
	}
}
