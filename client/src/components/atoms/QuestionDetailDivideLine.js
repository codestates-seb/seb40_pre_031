import styled from 'styled-components';
import QuestionAskButton from './QuestionAskButton';
const QuestionDetailDivideLineBox = styled.div`
  width: 750px;
  height: 50px;
  margin: 20px 0 5px 0;
  padding: 20px;
  h2 {
    margin: 0 0 15px 0;
    font-weight: 400;
  }
  hr {
    border: solid 1px var(--black-100);
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
  hr {
    border: solid 1px var(--black-100);
  }
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
`;

export const QuestionDetailDivideLine = () => {
  return (
    <QuestionDetailDivideLineBox>
      <h2>1 Answers</h2>
      <hr></hr>
    </QuestionDetailDivideLineBox>
  );
};

export const QuestionDetailDivideTitle = () => {
  return (
    <QuestionDetailDivideTitleBox>
      <div>
        <h1>제목이 위치함</h1>
        <QuestionAskButton />
      </div>
      <hr></hr>
    </QuestionDetailDivideTitleBox>
  );
};
