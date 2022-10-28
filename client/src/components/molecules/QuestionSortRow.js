import React from "react";
import styled from "styled-components";
import QuestionMenuTap from "../atoms/QuestionMenuTap";
import QuestionFilter from "../atoms/QuestionFilter";

const QuestionCount = styled.div`
  font-size: var(--fs-body3);
`

const QuestionSortLayout = styled.div`
  display: flex;
`;

const QuestionSort = () => {
  return (
    <QuestionSortLayout>
      <QuestionCount>23,150,605 questions</QuestionCount>
      <QuestionMenuTap />
      <QuestionFilter />
    </QuestionSortLayout>
  );
};

export default QuestionSort;