import React from 'react';
import styled from 'styled-components';
import Write from './Editor';

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

function AskQuestionEditorBox() {
  return (
    <Editorbox>
      <h3>Body</h3>
      <p>
        Include all the information someone would need to answer your question
      </p>
      <Write height={'500px'} />
    </Editorbox>
  );
}

export default AskQuestionEditorBox;
