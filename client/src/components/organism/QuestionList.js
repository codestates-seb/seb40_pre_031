import styled from 'styled-components';
import QuestionSummary from '../molecules/QuestionSummary';
import QuestionSummaryContent from '../molecules/QuestionSummaryContent';

const QuestionListLayout = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--bc-light);
`;

const QuestionList = (props) => {
  return (
    <QuestionListLayout>
      <QuestionSummary
        votes={props.question.votes}
        answers={props.question.answers}
        views={props.question.views}
      />
      <QuestionSummaryContent
        title={props.question.title}
        content={props.question.content}
        displayname={props.question.displayName}
        createdAt={props.question.createdAt}
      />
    </QuestionListLayout>
  );
};

export default QuestionList;
