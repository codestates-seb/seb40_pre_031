package com.codestates.question.controller;

import static com.codestates.global.utils.Check.*;

import java.security.Principal;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.answer.service.AnswerService;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
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

// @CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true", maxAge = 5000L)
@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
@Validated
public class QuestionController {
	private final QuestionService questionService;
	private final QuestionRepository questionRepository;
	private final QuestionMapper mapper;
	private final UserService userService;
	private final AnswerService answerService;

	@PostMapping("/ask")
	public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto,
		Principal principal) {
		User user = userService.findUserByEmail(principal.getName());
		Question question = mapper.questionPostDtoToQuestion(questionPostDto);
		question.setUser(user);

		Question postedQuestion = questionService.createQuestion(question);
		QuestionResponseDto response = mapper.questionToQuestionResponseDto(postedQuestion);

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PatchMapping("/{question_id}")
	public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive Long questionId,
		@Valid @RequestBody QuestionPatchDto questionPatchDto, Principal principal) {
		Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);

		if (question.getUser().getEmail() != principal.getName()) {
			throw new BusinessLogicException(ExceptionCode.NO_PERMISSION);
		}

		question.setId(questionId);

		Question updatedQuestion = questionService.updateQuestion(question);

		QuestionResponseDto response = mapper.questionToQuestionResponseDto(updatedQuestion);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{question_id}")
	public ResponseEntity getQuestion(
		@PathVariable("question_id") @Positive Long questionId, Principal principal) {
		Question question = questionService.findQuestion(questionId, principal);

		VoteStatus voteStatus = VoteStatus.NONE;

		if (principal != null) {
			User findUser = userService.findUserByEmail(principal.getName());
			voteStatus = questionService.checkUserVoteStatus(question, findUser);
		}

		ResponseSpecificQuestionDto response = mapper.questionToResponsePickOneDto(question, voteStatus);

		questionService.updateView(questionId);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping
	public Page<ResponseAllQuestionsDto> getQuestions(Pageable pageable) {
		Page<Question> pageQuestions = questionRepository.questionPage(pageable);

		Page<ResponseAllQuestionsDto> response = pageQuestions.map(mapper::questionToResponseAllPagesDto);

		return response;
	}

	@DeleteMapping("/{question_id}")
	public String deleteQuestion(@PathVariable("question_id") @Positive Long questionId, Principal principal) {
		Question question = questionService.findQuestion(questionId, null);
		checkAuthor(
			question.getUser().getEmail(),
			principal.getName()
		);

		questionService.deleteQuestion(questionId);

		return "success to delete!";
	}

	@PostMapping("/{question_id}/answers/{answer_id}/chosen")
	public String postChosenAnswer(@PathVariable("question_id") @Positive Long questionId,
		@PathVariable("answer_id") @Positive Long chosenAnswerId, Principal principal) {
		Question question = questionService.findQuestion(questionId, null);
		checkAuthor(
			question.getUser().getEmail(),
			principal.getName()
		);

		questionService.chosenAnswer(questionId, chosenAnswerId);

		return "success to marked!";
	}
}
