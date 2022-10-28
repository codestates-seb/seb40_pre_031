import React from "react";
import styled from "styled-components";
import QuestionTitle from "../atoms/QuestionTitle";
import QuestionUser from "./QuestionUser";

const QuestionSummaryContenLayout = styled.div`
  display: flex;
  flex-direction: column;
  `;

const QuestionContent = styled.div`
  display: flex;
  color: var(--fc-medium);
  font-size: 13px;
  flex-wrap: wrap;

  width: 595px;
  height: 34px;
`;

const QuestionSummaryContent = () => {
  return (
    <QuestionSummaryContenLayout>
      <QuestionTitle />
      <QuestionContent>
        I have a p-dialog modal with Date fields (using p-calendar). When I
        enter dates into them manually and press 'Tab' key, the dates get
        erased. Please let me
      </QuestionContent>
      <QuestionUser />
    </QuestionSummaryContenLayout>
    
  );
};

export default QuestionSummaryContent;
