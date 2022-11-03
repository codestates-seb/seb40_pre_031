import styled from 'styled-components';
import AddCommentButton from '../atoms/AddCommentButton';

const CommentFoam = styled.div`
  display: flex;
`;
const CommentPost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    width: 100px;
    height: ;
  }
`;
const CommentText = styled.div`
  width: 500px;
  height: 100px;
  textarea {
    width: 100%;
    height: 100%;
  }
`;
function CommentsAddBox() {
  return (
    <CommentFoam>
      <CommentPost>
        <CommentText>
          <textarea></textarea>
        </CommentText>
        {/* <button>Add Comment</button> */}
        <AddCommentButton />
      </CommentPost>
    </CommentFoam>
  );
}

export default CommentsAddBox;
