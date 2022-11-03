import styled from 'styled-components';
import QuestionSummary from '../molecules/QuestionSummary';
import QuestionSummaryContent from '../molecules/QuestionSummaryContent';

const QuestionListLayout = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--bc-light);
`;

const QuestionList = () => {
  return (
    <QuestionListLayout>
      <QuestionSummary />
      <QuestionSummaryContent />
    </QuestionListLayout>
  );
};

export default QuestionList;
