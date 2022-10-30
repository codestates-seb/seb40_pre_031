import React, { useRef } from 'react';
import styled from 'styled-components';
import AskQuestionButton from '../atoms/AskQuestionButton';
import AskQuestionEditorBox from '../molecules/AskQuestionEditorBox';
import AskQuestionHeader from '../molecules/AskQuestionHeader';
import AskQuestionTagBox from '../molecules/AskQuestionTagBox';
import AskQuestionTitleBox from '../molecules/AskQuestionTitleBox';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: var(--black-050);
`;

const Questionfoam = styled.div`
  background: var(--white);
  width: 1000px;
  height: 100%;
  border: 1px solid var(--black-200);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 5px 5px 5px 0px var(--black-100);
`;

function AskQuestion() {
  const titleRef = useRef(null);
  const editorRef = useRef(null);
  const tagRef = useRef(null);

  const editorOnChange = () => {
    const value = editorRef.current.getInstance().getMarkdown();
    console.log(value);
  };

  const titleOnChange = () => {
    const value = titleRef.current.value;
    console.log(value);
  };

  const buttonOnClick = () => {
    const data = {
      title: titleRef.current.value,
      content: editorRef.current.getInstance().getMarkdown(),
      tag: tagRef.current.value,
    };
    console.log(data);
  };

  return (
    <Container>
      <AskQuestionHeader />
      <Questionfoam>
        <AskQuestionTitleBox ref={titleRef} onChange={titleOnChange} />
        <AskQuestionEditorBox ref={editorRef} onChange={editorOnChange} />
        <AskQuestionTagBox ref={tagRef} />
      </Questionfoam>
      <AskQuestionButton onClick={buttonOnClick} />
    </Container>
  );
}

export default AskQuestion;
