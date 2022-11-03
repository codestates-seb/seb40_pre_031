import { QuestionDetail } from '../templates/QuestionDetail';
import {
  QuestionDetailDivideLine,
  QuestionDetailDivideTitle,
} from '../atoms/QuestionDetailDivideLine';
import { useEffect, useState } from 'react';
import { questionDetailApi } from '../../api/apis';
export const QuestionDetailPage = ({ question_id }) => {
  const [questionData, setQuestionData] = useState(null);
  console.log(questionData);

  useEffect(() => {
    questionDetailApi
      .getQuestionDetail(question_id)
      .then((res) => setQuestionData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <QuestionDetailDivideTitle></QuestionDetailDivideTitle>
      <QuestionDetail></QuestionDetail>
      {/* comment 컴포넌트와 comment작성컴포넌트를 추가해야함. */}
      <QuestionDetailDivideLine></QuestionDetailDivideLine>
      {/* 받은 답변 만큼 아래를 map을 돌려서 추가해야함 */}
      <QuestionDetail></QuestionDetail>
      {/* comment 컴포넌트와 comment작성컴포넌트를 추가해야함. */}
      {/* 맨아래 답변 컴포넌트도 추가해야함 */}
    </>
  );
};