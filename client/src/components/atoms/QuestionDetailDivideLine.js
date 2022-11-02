import styled from 'styled-components';

const QuestionDetailDivideLineBox = styled.div`
  width: 750px;
  height: 50px;
  margin: 5px 0 5px 0;
  h2 {
    margin: 5px 0 5px 25px;
    font-weight: 400;
  }
`;

export const QuestionDetailDivideLine = () => {
  return (
    <QuestionDetailDivideLineBox>
      <hr></hr>
      <h2>1 Answers</h2>
      <hr></hr>
    </QuestionDetailDivideLineBox>
  );
};
