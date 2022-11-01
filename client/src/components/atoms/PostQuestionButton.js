import React from 'react';
import styled from 'styled-components';

// 질문 등록 버튼 atom
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

function PostQuestionButton({ onClick }) {
  return <Button onClick={onClick}>Post your question</Button>;
}

export default PostQuestionButton;
