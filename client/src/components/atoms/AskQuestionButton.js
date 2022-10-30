import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 154px;
  height: 38px;
  background-color: var(--blue-500);
  color: var(--white);
  border-radius: 3px;
  outline: none;
  border: 1px solid transparent;
  margin: 20px 0px;
  :hover {
    background-color: var(--blue-300);
  }
`;

function AskQuestionButton({ onClick }) {
  return <Button onClick={onClick}>Ask your question</Button>;
}

export default AskQuestionButton;
