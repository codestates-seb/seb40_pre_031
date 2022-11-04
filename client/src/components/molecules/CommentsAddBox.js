import { forwardRef } from 'react';
import styled from 'styled-components';
import AddCommentButton from '../atoms/AddCommentButton';

const CommentFoam = styled.div`
  display: flex;
  margin-top: 20px;
`;
const CommentPost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const CommentText = styled.div`
  width: 500px;
  height: 100px;
  textarea {
    width: 100%;
    height: 100%;
  }
`;
const CommentsAddBox = forwardRef(({ onClick }, ref) => {
  return (
    <CommentFoam>
      <CommentPost>
        <CommentText>
          <textarea ref={ref}></textarea>
        </CommentText>
        <AddCommentButton onClick={onClick} />
      </CommentPost>
    </CommentFoam>
  );
});

CommentsAddBox.displayName = 'CommentsAddbox';

export default CommentsAddBox;
