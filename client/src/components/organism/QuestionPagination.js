/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { questionApi } from '../../api/apis';
import QuestionList from './QuestionList';
import dummyData from '../../data/dummyData.json';

const QuestionPagination = () => {
  const [currentPage, setCurrentPage] = useState(1); // 초기 값 1
  const [currentSize, setCurrentSize] = useState(5); // 한 페이지에 보여줄 질문 개수

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  return (
    <QuestionBox>
      <QuestionPageItem>1</QuestionPageItem>
      <QuestionPageItem>2</QuestionPageItem>
      <QuestionPageItem>3</QuestionPageItem>
      <QuestionPageItem>4</QuestionPageItem>
      <QuestionPageItem>5</QuestionPageItem>
    </QuestionBox>
  );
};

export default QuestionPagination;

const QuestionBox = styled.ul`
  display: flex;
`;

const QuestionPageItem = styled.li`
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
