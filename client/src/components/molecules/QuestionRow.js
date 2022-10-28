import React from "react";
import styled from "styled-components";
import QuestionAskButton from "../atoms/QuestionAskButton";

const QuestionHeadLayout = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-weight: 400;
    width: 425px;
  }
`;

const QuestionHead = () => {
  return (
    <QuestionHeadLayout>
      <h1>All Questions</h1>
      <QuestionAskButton/>
    </QuestionHeadLayout>
  );
};

export default QuestionHead;