import React from 'react';
import styled from 'styled-components';

const SummaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  width: 108px;
  height: 150px;

  margin-right: 16px;

  & div {
    margin-bottom: 4px;


  }
  `;

const QuestionVotes = styled.div`
  font-size:  var(--fs-caption);
`;

const AnswerSummaryBox = styled.div`
  width: 65px;
  height: 25px;
  border: 1px solid var(--green-700);
  border-radius: 3px;

  font-size:  var(--fs-caption);
  color: var(--green-700); 
  padding: 2px 4px;
  `;

const QuestionViews = styled.div`

  font-size:  var(--fs-caption);
  color: var(--black-500); 
  `;


const QuestionSummary = () => {
  return (
    <SummaryLayout>
      <QuestionVotes> 0 Votes</QuestionVotes>
      <AnswerSummaryBox>2 answers</AnswerSummaryBox>
      <QuestionViews>4 views</QuestionViews>
    </SummaryLayout>
  );
};

export default QuestionSummary;