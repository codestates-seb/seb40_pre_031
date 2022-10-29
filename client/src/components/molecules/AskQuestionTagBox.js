import React from 'react';
import styled from 'styled-components';

const TagBox = styled.div`
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

function AskQuestionTagBox() {
  return (
    <TagBox>
      <h3>Tags</h3>
      <p>
        Add up to 5 tags to describe what your question is about. Start typing
        to see suggestions
      </p>
      <input type="text" placeholder="e,g (arrays xml json)"></input>
    </TagBox>
  );
}

export default AskQuestionTagBox;
