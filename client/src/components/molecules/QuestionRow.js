import styled from 'styled-components';
import QuestionAskButton from '../atoms/QuestionAskButton';

const QuestionHead = () => {
  return (
    <QuestionHeadLayout>
      <h1>All Questions</h1>
      <QuestionAskButton />
    </QuestionHeadLayout>
  );
};
export default QuestionHead;

const QuestionHeadLayout = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 62.094px;
  h1 {
    flex: 1 auto;
    font-size: 2.07692308rem;
    font-weight: 400;
  }
`;
