/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { questionApi } from '../api/apis';
import QuestionList from '../components/organism/QuestionList';

const useTotal = (currentPage, currentSize) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    questionApi
      .getQuestionPage(currentPage, currentSize)
      .then((res) => {
        setTotal(res.totalElements);
      })
      .catch((err) => console.log(err));
  }, []);

  return total;
};

export default useTotal;
