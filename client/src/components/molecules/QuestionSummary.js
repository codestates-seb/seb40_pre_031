import styled from 'styled-components';

const QuestionSummary = ({ votes, answers, views }) => {
  return (
    <SummaryLayout>
      <QuestionVotes>{votes} Votes</QuestionVotes>
      <AnswerSummaryBox>{answers} answers</AnswerSummaryBox>
      <QuestionViews>{views} views</QuestionViews>
    </SummaryLayout>
  );
};

export default QuestionSummary;
const SummaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  width: 108px;
  height: 100px;

  margin-right: 16px;

  & div {
    margin-bottom: 4px;
  }
`;

const QuestionVotes = styled.div`
  font-size: var(--fs-caption);
`;

const AnswerSummaryBox = styled.div`
  width: 65px;
  height: 25px;
  border: 1px solid var(--green-700);
  border-radius: 3px;

  font-size: var(--fs-caption);
  color: var(--green-700);
  padding: 2px 4px;
`;

const QuestionViews = styled.div`
  font-size: var(--fs-caption);
  color: var(--black-500);
`;
