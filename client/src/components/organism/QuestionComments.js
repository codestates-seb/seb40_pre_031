import styled from 'styled-components';
import CommentsAddBox from '../molecules/CommentsAddBox';
import CommentsList from '../molecules/CommentsList';

const CommentsBox = styled.div`
  width: 727px;
  padding-left: 52px;
`;
function QuestionComments() {
  return (
    <>
      <CommentsBox>
        <CommentsList />
        <CommentsAddBox />
      </CommentsBox>
    </>
  );
}

export default QuestionComments;
