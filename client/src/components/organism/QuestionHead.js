import styled from 'styled-components';
import QuestionRow from '../molecules/QuestionRow';
import QuestionSortRow from '../molecules/QuestionSortRow';

const QuestionHead = () => {
  return (
    <QuestionHeadLayout>
      <QuestionRow />
      <QuestionSortRow />
    </QuestionHeadLayout>
  );
};

export default QuestionHead;

const QuestionHeadLayout = styled.div`
  padding: 12px;
  border-bottom: 1px solid var(--bc-light);
`;
