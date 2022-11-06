import styled from 'styled-components';
import QuestionHead from '../organism/QuestionHead';
import QuestionLists from '../templates/QuestionLists';
// eslint-disable-next-line no-unused-vars
import LeftNav from '../organism/LeftNav';
import RightSidebar from '../templates/RightSidebar';
import QuestionPagination from '../organism/QuestionPagination';

const QuestionPage = () => {
  return (
    <>
      <QuestionLayout>
        <LeftNav />
        <div>
          <QuestionHead />
          <QuestionLists />
          <QuestionPagination />
        </div>
        <div>
          <RightSidebar />
        </div>
      </QuestionLayout>
    </>
  );
};

const QuestionLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
`;

export default QuestionPage;
