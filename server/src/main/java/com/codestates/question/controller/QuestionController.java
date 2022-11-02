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
import com.codestates.question.dto.ResponseAllQuestionsDto;
import com.codestates.question.dto.ResponseSpecificQuestionDto;
import com.codestates.question.entity.Question;
import com.codestates.question.mapper.QuestionMapper;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.service.QuestionService;
import com.codestates.status.VoteStatus;
import com.codestates.user.entity.User;
import com.codestates.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
@Valid
public class QuestionController {
	private final QuestionService questionService;
	private final QuestionRepository questionRepository;
	private final QuestionMapper mapper;
	private final UserService userService;

	@PostMapping("/ask")
	public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
		User user = userService.findMember(questionPostDto.getUserId());
		Question question = mapper.questionPostDtoToQuestion(questionPostDto);
		question.setUser(user);

		Question postedQuestion = questionService.createQuestion(question);
		QuestionResponseDto response = mapper.questionToQuestionResponseDto(postedQuestion);

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PatchMapping("/{question_id}")
	public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive Long questionId,
		@Valid @RequestBody QuestionPatchDto questionPatchDto) {
		Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
		question.setId(questionId);

		Question updatedQuestion = questionService.updateQuestion(question);

		QuestionResponseDto response = mapper.questionToQuestionResponseDto(updatedQuestion);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

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

	@GetMapping
	public Page<ResponseAllQuestionsDto> getQuestions(Pageable pageable) {
		Page<Question> pageQuestions = questionRepository.questionPage(pageable);

		Page<ResponseAllQuestionsDto> response = pageQuestions.map(mapper::questionToResponseAllPagesDto);

		return response;
	}

	@DeleteMapping("/{question_id}")
	public String deleteQuestion(@PathVariable("question_id") @Positive Long questionId) {
		questionService.deleteQuestion(questionId);

		return "success to delete!";
	}
}
