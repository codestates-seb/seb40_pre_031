import styled from 'styled-components';
import AskQuestion from '../organism/AskQuestion';

const QuestionAskPageFoam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black-050);
`;

function QuestionAskPage() {
  document.title = 'Question Ask Page';
  return (
    <>
      <QuestionAskPageFoam>
        <AskQuestion />
      </QuestionAskPageFoam>
    </>
  );
}

export default QuestionAskPage;
