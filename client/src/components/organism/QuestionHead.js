import React from 'react';
import QuestionRow from '../molecules/QuestionRow';
import QuestionSortRow from '../molecules/QuestionSortRow';


const QuestionHead = () => {
  return (
    <div>
      <QuestionRow />
      <QuestionSortRow />
    </div>
  );
};

export default QuestionHead;