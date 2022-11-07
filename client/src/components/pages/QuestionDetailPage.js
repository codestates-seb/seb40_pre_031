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
import { useSelector } from 'react-redux';
import { LodingCircle } from '../atoms/LoadingCircle';

const QuestionDetailPageBox = styled.div`
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

const QuestionDetailPage = () => {
  const location = useLocation();
  const question_id = location.state.question_id;
  const [question, setQuestion] = useState(null);
  const [answers, setAnswer] = useState(null);
  const isLogined = useSelector((store) => store.authReducer.userStatus);

  useEffect(() => {
    questionDetailApi
      .getQuestionDetail(question_id)
      .then((res) => {
        const { answerList, ...tempQuestion } = res.data;
        setTimeout(() => {
          setQuestion(tempQuestion);
          setAnswer(answerList);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return question ? (
    <QuestionDetailPageBox>
      <LeftNav />
      <div>
        <QuestionDetailDivideTitle
          title={question.title}
          date={question.createdAt}
        ></QuestionDetailDivideTitle>
        <div className="ContentAndRightSidebarBox">
          <div>
            <QuestionDetail data={question}></QuestionDetail>
            <QuestionDetailDivideLine
              count={answers.len1th}
            ></QuestionDetailDivideLine>
            {answers
              ? answers.map((answer) => (
                  <>
                    <QuestionDetail
                      key={answer.answerId}
                      data={answer}
                      chosenAnswerId={question.chosenAnswerId}
                    ></QuestionDetail>
                    <QuestionComments
                      commentList={answer.commentList}
                      questionid={question_id}
                      answerid={answer.answerId}
                    ></QuestionComments>
                  </>
                ))
              : null}
            {isLogined && (
              <PostAnswerBox questionid={question_id}></PostAnswerBox>
            )}
          </div>
          <RightSideBar />
        </div>
      </div>
    </QuestionDetailPageBox>
  ) : (
    <LodingCircle />
  );
};

export default QuestionDetailPage;
