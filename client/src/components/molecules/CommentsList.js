import styled from 'styled-components';
import Comment from '../atoms/Comment';
const CommentsBox = styled.div`
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 5px;
  border-top: 1px solid var(--black-075);
  border-bottom: 1px solid var(--black-075);
`;

function CommentsList() {
  return (
    <CommentsBox>
      <Comment />
    </CommentsBox>
  );
}

export default CommentsList;
