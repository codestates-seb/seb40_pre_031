/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authApi, questionApi } from '../../api/apis';
import QuestionList from '../organism/QuestionList';
import axios from 'axios';

const QuestionLists = () => {
  const [Questions, setQuestions] = useState([]); // 백엔드 통신으로 데이터 받아오기
  const [currentPage, setCurrentPage] = useState(1); // 초기 값 1
  const [currentSize, setCurrentSize] = useState(5); // 한 페이지에 보여줄 질문 개수

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  // 여기에 페이지네이션 불러와서 입력되는 value에 따라서 page랑 사이즈 바뀌도록 하기
  // 총합의 개수로 페이지 개수 나누기
  useEffect(() => {
    questionApi
      // .getQuestion()
      .getQuestionPage(currentPage, currentSize)
      .then((res) => {
        setQuestions(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // 칸 눌렀을 때
  return Questions.map((question, index) => {
    return <QuestionList key={index} question={question} />;
  });
};

export default QuestionLists;
