import styled from 'styled-components';
import QuestionHead from '../organism/QuestionHead';
import QuestionLists from '../templates/QuestionLists';
// eslint-disable-next-line no-unused-vars
import LeftNav from '../organism/LeftNav';

const QuestionLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuestionPage = () => {
  return (
    <QuestionLayout>
      <LeftNav />
      <div>
        <QuestionHead />
        <QuestionLists />
      </div>
    </QuestionLayout>
  );
};

export default QuestionPage;
