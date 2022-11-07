import { useEffect, useState } from 'react';
import { questionApi } from '../../api/apis';
import QuestionList from '../organism/QuestionList';

const HomeLists = () => {
  const [Questions, setQuestions] = useState([]); // 백엔드 통신으로 데이터 받아오기

  useEffect(() => {
    questionApi
      // .getQuestion()
      .getQuestion()
      .then((res) => {
        setQuestions(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return Questions.map((question, index) => {
    return <QuestionList key={index} question={question} />;
  });
};

export default HomeLists;
