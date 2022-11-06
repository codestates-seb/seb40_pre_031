import styled from 'styled-components';
import QuestionHead from '../organism/QuestionHead';
import LeftNav from '../organism/LeftNav';
import QuestionPagination from '../organism/QuestionPagination';
import HomeLists from '../templates/HomeLists';
import RightSidebar from '../templates/RightSidebar';

const QuestionPage = () => {
  return (
    <QuestionLayout>
      <LeftNav />
      <div>
        <QuestionHead />
        <HomeLists />
        <QuestionPagination />
      </div>
      <div>
        <RightSidebar />
      </div>
    </QuestionLayout>
  );
};

const QuestionLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
`;

export default QuestionPage;
