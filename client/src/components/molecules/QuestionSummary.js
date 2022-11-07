import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const QuestionSummary = ({ votes, answers, views, chosen }) => {
  return (
    <SummaryLayout>
      <div>{votes} Votes</div>
      <div className={!answers ? ' ' : chosen ? 'chosen' : 'green'}>
        {answers} answers
      </div>
      <div>{views} views</div>
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
  font-size: var(--fs-caption);
  margin-right: 16px;

  & div {
    margin-bottom: 4px;
    color: var(--black-500);
  }

  .chose {
    width: 70px;
    height: 25px;
    border: 1px solid var(--green-700);
    border-radius: 3px;
    background-color: var(--green-700);
    color: var(--white);
    padding: 2px 4px;
  }

  .green {
    width: 70px;
    height: 25px;
    border: 1px solid var(--green-700);
    border-radius: 3px;
    color: var(--green-700);
    padding: 2px 4px;
  }
`;
