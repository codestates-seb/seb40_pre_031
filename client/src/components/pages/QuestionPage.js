import styled from 'styled-components';
import QuestionHead from '../organism/QuestionHead';
import QuestionLists from '../templates/QuestionLists';

const QuestionLayout = styled.div``;

const QuestionPage = () => {
  return (
    <QuestionLayout>
      <QuestionHead />
      <QuestionLists />
    </QuestionLayout>
  );
};

export default QuestionPage;
