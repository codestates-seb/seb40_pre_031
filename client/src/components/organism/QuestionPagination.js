/* eslint-disable no-unused-vars */
import styled from 'styled-components';

const QuestionPagination = ({ total, size, paginate }) => {
  const pageNumber = [];
  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(total / size); i++) {
    pageNumber.push(i);
  }

  return (
    <QuestionBox>
      {pageNumber.map((pageNum, idx) => {
        <button
          key={idx}
          className="pagination_item"
          onClick={() => {
            paginate(pageNum);
          }}
        >
          {pageNum}
        </button>;
      })}
    </QuestionBox>
  );
};

export default QuestionPagination;

const QuestionBox = styled.ul`
  display: flex;

  &.pagination_item {
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
  }
`;

const QuestionPageItem = styled.li`
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
`;
