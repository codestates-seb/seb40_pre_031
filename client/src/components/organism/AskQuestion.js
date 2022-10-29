import React from 'react';
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
  return (
    <Container>
      <AskQuestionHeader />
      <Questionfoam>
        <AskQuestionTitleBox />
        <AskQuestionEditorBox />
        <AskQuestionTagBox />
      </Questionfoam>
      <AskQuestionButton />
    </Container>
  );
}

export default AskQuestion;
