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
import RightSideBar from '../templates/RightSidebar';
import { useLocation } from 'react-router-dom';

const QuestionDetailPage = () => {
  const location = useLocation();
  const question_id = location.state.question_id;
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
      .catch((err) => console.log(err));
  }, []);

  const QuestionDetailPage = styled.div`
    display: flex;
    background-color: rgba(254, 253, 254);
    padding: 0 0 0 18vw;
    @media screen and (max-width: 1060px) {
      padding: 0px;
      .RightSideBar {
        display: none;
        border: solid 1px red;
      }
    }
    .ContentAndRightSidebarBox {
      display: flex;
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
        <div className="ContentAndRightSidebarBox">
          <div>
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
                      questionid={question_id}
                      answerid={answer.answerId}
                    ></QuestionComments>
                  </>
                ))
              : null}
            <PostAnswerBox questionid={question_id}></PostAnswerBox>
          </div>
          <RightSideBar />
        </div>
      </div>
    </QuestionDetailPage>
  ) : null;
};

export default QuestionDetailPage;
