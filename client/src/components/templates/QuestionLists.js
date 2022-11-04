/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { questionApi } from '../../api/apis';
import QuestionList from '../organism/QuestionList';
import axios from 'axios';

const QuestionLists = () => {
  const [Questions, setQuestions] = useState([]); // 백엔드 통신으로 데이터 받아오기
  const [currentPage, setCurrentPage] = useState(1); // 초기 값 1
  const [currentSize, setCurrentSize] = useState(5); // 한 페이지에 보여줄 질문 개수

  useEffect(() => {
    questionApi
      .getQuestion()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  return Questions.map((question, index) => {
    return <QuestionList key={index} question={question} />;
  });
};

export default QuestionLists;

const QuestionBox = styled.div`
  width: 25px;
  height: 27px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid var(--bc-medium);
  color: var(--fc-medium);
  padding: 0 var(--su8);
  margin-left: var(--su2);
  margin-right: var(--su2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: var(--bc-darker);
    background-color: var(--black-100);
    color: var(--fc-dark);
  }
`;
