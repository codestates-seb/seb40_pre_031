/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { questionApi } from '../api/apis';
import QuestionList from '../components/organism/QuestionList';

const usePatch = (currentPage, currentSize) => {
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    questionApi
      .getQuestionPage(currentPage, currentSize)
      .then((res) => {
        setQuestions(res.content);
      })
      .catch((err) => console.log(err));
  }, []);
  return Questions.map((question, index) => {
    return <QuestionList key={index} question={question} />;
  });
};

export default usePatch;
