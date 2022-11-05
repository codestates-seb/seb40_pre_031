import styled from 'styled-components';
import Comment from '../atoms/Comment';
import { TimeCheck } from '../../actions/index';
const CommentsBox = styled.ul`
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 5px;
`;

function CommentsList({ commentsList }) {
  return (
    <CommentsBox>
      {commentsList
        ? commentsList.map((comment) => (
            <Comment
              key={comment.commentId}
              content={comment.content}
              id={comment.displayName}
              time={TimeCheck(comment.createdAt)}
            />
          ))
        : null}
    </CommentsBox>
  );
}

export default CommentsList;
