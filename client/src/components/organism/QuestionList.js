import styled from 'styled-components';
import QuestionSummary from '../molecules/QuestionSummary';
import QuestionSummaryContent from '../molecules/QuestionSummaryContent';

const QuestionListLayout = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--bc-light);
`;

const QuestionList = ({ question }) => {
  return (
    <QuestionListLayout>
      <QuestionSummary
        votes={question.votes}
        answers={question.answers}
        views={question.views}
      />
      <QuestionSummaryContent
        title={question.title}
        content={question.content}
        displayname={question.displayName}
        createdAt={question.createdAt}
      />
    </QuestionListLayout>
  );
};

export default QuestionList;
