import { useRef } from 'react';
import styled from 'styled-components';
import PostAnswerButton from '../atoms/PostAnswerButton';
import AnswerWrite from './AnswerEditor';
import { answerApi } from '../../api/apis';
import { useSelector } from 'react-redux';

const PostAnswer = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  padding-left: 88px;
  margin-bottom: 20px;
  width: 727px;
  height: 100%;
  gap: 4px;
  h2 {
    padding-top: 20px;
    margin-bottom: 19px;
  }
`;
const AnswerEditorFoam = styled.div`
  padding-bottom: 10px;
`;
const ButtonBox = styled.div`
  padding-top: 10px;
  padding-bottom: 15px;
`;

function PostAnswerBox({ questionid }) {
  const editorRef = useRef(null);
  const questionId = questionid;
  const userId = useSelector((state) => state.authReducer.userId);
  const buttonOnClick = () => {
    const data = {
      userId: userId,
      content: editorRef.current.getInstance().getMarkdown(),
      questionId: questionId,
    };
    answerApi.postAnswer(questionId, data.content).then((res) => {
      console.log(res);
      location.reload();
    });
  };
  return (
    <div>
      <PostAnswer>
        <h2>Your Answer</h2>
        <AnswerEditorFoam>
          <AnswerWrite ref={editorRef} />
        </AnswerEditorFoam>
        <ButtonBox>
          <PostAnswerButton onClick={buttonOnClick} />
        </ButtonBox>
      </PostAnswer>
    </div>
  );
}

export default PostAnswerBox;
