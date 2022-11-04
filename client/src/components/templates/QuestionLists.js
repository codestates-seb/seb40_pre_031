/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { questionApi } from '../../api/apis';
import QuestionList from '../organism/QuestionList';
import axios from 'axios';

const QuestionLists = () => {
  const [Questions, setQuestions] = useState([]); // 백엔드 통신으로 데이터 받아오기
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1); // 초기 값 1
  const [questionPerPage, setquestionPerPage] = useState(5); // 한 페이지에 보여줄 질문 개수

  useEffect(() => {
    questionApi
      .getQuestion()
      .then((res) => {
        setQuestions(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Get Current Products
  // const indexOfLastQuestion = Questions * questionPerPage;
  // const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
  // const currentQuestion = Questions.slice(
  //   indexOfFirstQuestion,
  //   indexOfLastQuestion
  // );

  // const questionList = currentQuestion.map((question, index) => {
  //   console.log(question);
  //   return <QuestionList key={index} question={question} />;
  // });

  return Questions.map((question, index) => {
    return <QuestionList key={index} question={question} />;
  });
};

export default QuestionLists;
