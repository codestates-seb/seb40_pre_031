import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Write from './Editor';

// 에디터를 포함하는 부분
const Editorbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 5px;
  h3 {
    font-size: 15px;
    color: var(--black-900);
  }
  p {
    font-size: 12px;
    color: var(--fc-medium);
  }
`;

const AskQuestionEditorBox = forwardRef(({ onChange }, ref) => {
  return (
    <Editorbox>
      <h3>Body</h3>
      <p>
        Include all the information someone would need to answer your question
      </p>
      <Write ref={ref} onChange={onChange} />
    </Editorbox>
  );
});

export default AskQuestionEditorBox;
