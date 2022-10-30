import React, { forwardRef } from 'react';
import styled from 'styled-components';

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  h3 {
    font-size: 15px;
    color: var(--black-900);
  }
  p {
    font-size: 12px;
    color: var(--fc-medium);
  }
  input {
    width: 100%;
    padding: 7.8px 9.1px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
  }
`;

const AskQuestionTitleBox = forwardRef(({ onChange }, ref) => {
  return (
    <TitleBox>
      <h3>Title</h3>
      <p>Be specific and imagine you're asking a question to another person</p>
      <input
        type="text"
        placeholder="e,g is there an R function the index of an element in a vector?"
        ref={ref}
        onChange={onChange}
      ></input>
    </TitleBox>
  );
});

export default AskQuestionTitleBox;
