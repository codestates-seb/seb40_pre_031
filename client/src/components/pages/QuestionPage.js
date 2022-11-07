/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useState } from 'react';
import QuestionHead from '../organism/QuestionHead';
import LeftNav from '../organism/LeftNav';
import RightSidebar from '../templates/RightSidebar';
import QuestionPagination from '../organism/QuestionPagination';
import usePatch from '../../hooks/usePatch';
import useTotal from '../../hooks/useTotal';
import Paginator from 'react-hooks-paginator';

const QuestionPage = () => {
  document.title = 'Question Page';
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 초기 값 1
  const [currentSize, setCurrentSize] = useState(5); // 한 페이지에 보여줄 질문 개수
  let total = useTotal(currentPage, currentSize);
  let questionlist = usePatch(currentPage, currentSize);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <QuestionLayout>
        <LeftNav />
        <div>
          <QuestionHead />
          {questionlist}
          <QuestionBox>
            <Paginator
              totalRecords={total}
              pageLimit={5}
              pageNeighbours={1}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </QuestionBox>
        </div>
        <div>
          <RightSidebar />
        </div>
      </QuestionLayout>
    </>
  );
};

export default QuestionPage;

const QuestionLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--white);
`;

const QuestionBox = styled.div`
  display: flex;
`;

const QuestionPageItem = styled.button`
  width: 25px;
  height: 27px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid var(--bc-medium);
  color: var(--fc-medium);
  padding: 0 var(--su8);
  margin-left: var(--su2);
  margin-right: var(--su2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: var(--bc-darker);
    background-color: var(--black-100);
    color: var(--fc-dark);
  }

  &.size {
    background-color: aliceblue;
  }
`;
