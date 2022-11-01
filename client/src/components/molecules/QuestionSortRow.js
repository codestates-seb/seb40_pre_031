import React from "react";
import styled from "styled-components";
import QuestionFilter from "../atoms/QuestionFilter";

const QuestionSortLayout = styled.div`
  display: flex;
`;

const QuestionCount = styled.div`
  font-size: var(--fs-body3);
  flex: 1 auto;
`;



const QuestionSort = () => {
  return (
    <QuestionSortLayout>
      <QuestionCount>23,150,605 questions</QuestionCount>
      <QuestionFilter />
    </QuestionSortLayout>
  );
};

export default QuestionSort;