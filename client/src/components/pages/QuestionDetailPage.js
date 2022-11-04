import { QuestionDetail } from '../templates/QuestionDetail';
import {
  QuestionDetailDivideLine,
  QuestionDetailDivideTitle,
} from '../atoms/QuestionDetailDivideLine';
import { useEffect, useState } from 'react';
import { questionDetailApi } from '../../api/apis';
import LeftNav from '../organism/LeftNav';
import styled from 'styled-components';
import QuestionComments from '../organism/QuestionComments';
import PostAnswerBox from '../molecules/PostAnswerBox';

const QuestionDetailPage = ({ question_id }) => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswer] = useState(null);

  useEffect(() => {
    questionDetailApi
      .getQuestionDetail(question_id)
      .then((res) => {
        const { answerList, ...tempQuestion } = res.data;
        setQuestion(tempQuestion);
        setAnswer(answerList);
      })
      .catch(() => console.log('에러~'));
  }, []);

  const QuestionDetailPage = styled.div`
    display: flex;
    background-color: rgba(254, 253, 254);
    padding: 0 0 0 18vw;
    @media screen and (max-width: 1060px) {
      padding: 0px;
    }
  `;

  return question ? (
    <QuestionDetailPage>
      <LeftNav />
      <div>
        <QuestionDetailDivideTitle
          title={question.title}
          date={question.createdAt}
        ></QuestionDetailDivideTitle>
        <QuestionDetail data={question}></QuestionDetail>
        {/* comment 컴포넌트와 comment작성컴포넌트를 추가해야함. */}
        <QuestionDetailDivideLine
          count={answers.length}
        ></QuestionDetailDivideLine>
        {/* 받은 답변 만큼 아래를 map을 돌려서 추가해야함 */}
        {answers
          ? answers.map((answer) => (
              <>
                <QuestionDetail
                  key={answer.answerId}
                  data={answer}
                ></QuestionDetail>
                <QuestionComments
                  commentList={answer.commentList}
                ></QuestionComments>
              </>
            ))
          : null}
        <div>
          <PostAnswerBox></PostAnswerBox>
        </div>
      </div>
    </QuestionDetailPage>
  ) : null;
};

export default QuestionDetailPage;
