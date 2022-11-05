import styled from 'styled-components';
import QuestionAskButton from './QuestionAskButton';
import { TimeCheck } from '../../actions';
const QuestionDetailDivideLineBox = styled.div`
  width: 750px;
  height: 50px;
  margin: 20px 0 5px 0;
  padding: 20px;
  h3 {
    margin: 0 0 15px 0;
    font-weight: 400;
  }
  hr {
    border: solid 1px var(--black-050);
  }
`;

const QuestionDetailDivideTitleBox = styled.div`
  width: 1050px;
  height: 50px;
  margin: 20px 0 5px 0;
  padding: 0 20px 0 20px;
  div {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    margin: 0 0 15px 0;
    font-weight: 400;
  }
  h6 {
    margin: 0 0 10px 1px;
    color: var(--black-500);
  }
  hr {
    border: solid 1px var(--black-100);
    margin: 0 0 104px 0;
  }
  @media screen and (max-width: 1060px) {
    width: 78vw;
  }
`;

export const QuestionDetailDivideLine = ({ count }) => {
  return (
    <QuestionDetailDivideLineBox>
      <h3>{count} Answers</h3>
      <hr></hr>
    </QuestionDetailDivideLineBox>
  );
};

//질문 제목
export const QuestionDetailDivideTitle = ({ title, date }) => {
  return (
    <QuestionDetailDivideTitleBox>
      <div>
        <h1>{title}</h1>
        <QuestionAskButton />
      </div>
      <h6>Asked {TimeCheck(date)}</h6>
      <hr></hr>
    </QuestionDetailDivideTitleBox>
  );
};
