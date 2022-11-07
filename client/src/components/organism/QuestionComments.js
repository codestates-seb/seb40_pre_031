import { useRef } from 'react';
import styled from 'styled-components';
import CommentsAddBox from '../molecules/CommentsAddBox';
import CommentsList from '../molecules/CommentsList';
import { useSelector } from 'react-redux';
import { commentApi } from '../../api/apis';

const CommentsBox = styled.div`
  background: var(--white);
  width: 730px;
  padding-left: 73px;
  padding-bottom: 20px;
  border-top: 1px solid var(--black-075);
  border-bottom: 1px solid var(--black-075);
`;
function QuestionComments({ commentList, questionid, answerid }) {
  const CommentRef = useRef(null);
  const userId = useSelector((state) => state.authReducer.userId);
  const isLogined = useSelector((store) => store.authReducer.userStatus);

  const addCommentOnClick = () => {
    const data = {
      userid: userId,
      content: CommentRef.current.value,
      questionid: questionid,
      answerid: answerid,
    };
    commentApi
      .postComment(data.questionid, data.answerid, data.userid, data.content)
      .then((res) => {
        console.log(res);
        location.reload();
      });
    CommentRef.current.value = '';
  };
  return (
    <>
      <CommentsBox>
        <CommentsList
          commentsList={commentList}
          questionid={questionid}
          answerid={answerid}
        />
        {isLogined && (
          <CommentsAddBox ref={CommentRef} onClick={addCommentOnClick} />
        )}
      </CommentsBox>
    </>
  );
}

export default QuestionComments;
