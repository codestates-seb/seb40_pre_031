/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { questionApi } from '../../api/apis';
import QuestionList from '../organism/QuestionList';
import axios from 'axios';

const QuestionLists = () => {
  const [Questions, setQuestions] = useState([]); // 백엔드 통신으로 데이터 받아오기

  useEffect(() => {
    questionApi
      .getQuestion()
      .then((res) => {
        setQuestions(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return Questions.map((question, index) => {
    return <QuestionList key={index} question={question} />;
  });
};

export default QuestionLists;
