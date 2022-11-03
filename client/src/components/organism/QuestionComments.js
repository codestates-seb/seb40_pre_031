import { useRef } from 'react';
import styled from 'styled-components';
import CommentsAddBox from '../molecules/CommentsAddBox';
import CommentsList from '../molecules/CommentsList';

const CommentsBox = styled.div`
  background: var(--white);
  width: 730px;
  padding-left: 88px;
  padding-bottom: 20px;
  border-top: 1px solid var(--black-075);
  border-bottom: 1px solid var(--black-075);
`;
function QuestionComments() {
  const commentsData = [
    {
      comments_id: 'comments_id1',
      user_id: 'users_id1',
      answers_id: 'answers 1',
      content: '댓글내용 1',
      created_at: '2022-10-17T10:35:52.43015',
      modified_at: '2022-10-17T10:35:52.43015',
    },
    {
      comments_id: 'comments_id2',
      user_id: 'users_id2',
      answers_id: 'answers 1',
      content: 'ㅇㄴㅁㄹㅁㄴㅇㄹㅁㄴㄹ',
      created_at: '2022-11-01T12:30:19.89405',
      modified_at: '2022-11-01T12:30:19.89405',
    },
    {
      comments_id: 'comments_id3',
      user_id: 'users_id3',
      answers_id: 'answers 1',
      content: '유튜브에서 봤습니다 ',
      created_at: '시간',
      modified_at: '2022-11-03T12:30:19.89405',
    },
    {
      comments_id: 'comments_id4',
      user_id: 'users_id4',
      answers_id: 'answers 1',
      content: '자바스크립트 이런이런이런점이 어렵습니다 저도 ㅁ린말하고있어요',
      created_at: '시간',
      modified_at: '2022-11-03T17:30:19.89405',
    },
  ];

  const CommentRef = useRef(null);

  const addCommentOnClick = () => {
    const data = { users_id: 'codingkim', content: CommentRef.current.value };
    console.log(data);
    CommentRef.current.value = '';
  };
  return (
    <>
      <CommentsBox>
        <CommentsList data={commentsData} />
        <CommentsAddBox ref={CommentRef} onClick={addCommentOnClick} />
      </CommentsBox>
    </>
  );
}

export default QuestionComments;
