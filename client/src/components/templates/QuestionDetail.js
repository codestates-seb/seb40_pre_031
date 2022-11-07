import {
  QuestionDetailsideBox,
  QuestionDetailContentBox,
} from '../atoms/QuestionDetailContainer';
import { QuestionDetailSidebar } from '../molecules/QuestionDetailSidebar';
import { QuestionDetailUserFooter } from '../organism/QuestionDetailUserFooter';
import QuestionViewer from '../atoms/QuestionViewer';
import QuestionEditor from '../atoms/QuestionEditor';
import { useState, useRef } from 'react';
import { answerApi, questionApi } from '../../api/apis';
import { useNavigate } from 'react-router-dom';
/* eslint-disable */
//본문내용과 추천수를 포함하는 컴포넌트
export const QuestionDetail = ({ data, chosenAnswerId }) => {
  data.voteStatus = data.voteStatus || data.status;
  const [edit, setEdit] = useState(false);
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const emoji = String.fromCodePoint(parseInt('1F4DD', 16));
  const title = `${emoji}${data.title}`;
  // 수정 버튼 이벤트
  const editOnClick = () => {
    console.log('edit');
    if (edit === true) {
      const content = editorRef.current.getInstance().getMarkdown();
      if (data.answerId) {
        console.log(data.answerId);
        if (window.confirm('수정하시겠습니까?')) {
          console.log(content);
          answerApi
            .patchAnswer(data.questionId, data.answerId, content)
            .then((res) => {
              console.log(res);
              location.reload();
            });
        }
      } else if (data.questionId) {
        console.log(content);
        if (window.confirm('수정하시겠습니까?')) {
          questionApi
            .patchQuestion(data.questionId, title, content)
            .then((res) => {
              console.log(res);
              location.reload();
            });
        }
      }
    }
    setEdit(!edit);
  };

  // 삭제버튼 이벤트
  const deleteOnClick = () => {
    console.log('delete');
    if (data.answerId) {
      if (window.confirm('삭제하시겠습니까?')) {
        answerApi.deleteAnswer(data.questionId, data.answerId).then((res) => {
          console.log(res);
          location.reload();
        });
      }
    } else if (data.questionId) {
      if (window.confirm('삭제하시겠습니까?')) {
        questionApi.deleteQuestion(data.questionId).then((res) => {
          console.log(res);
          location.reload();
        });
        navigate('/questions');
      }
    }
  };
  return data ? (
    <>
      <QuestionDetailContentBox>
        <QuestionDetailsideBox>
          <QuestionDetailSidebar
            vote={data.votes}
            voteStatus={data.voteStatus}
            data={{questionId: data.questionId, answerId:data.answerId, chosenAnswerId: chosenAnswerId}}
          ></QuestionDetailSidebar>
        </QuestionDetailsideBox>
        {!edit && <QuestionViewer content={data.content}></QuestionViewer>}
        {edit && (
          <QuestionEditor
            className="toastui-editor-contents"
            content={data.content}
            ref={editorRef}
          ></QuestionEditor>
        )}
      </QuestionDetailContentBox>
      <QuestionDetailUserFooter
        date={data.createdAt}
        displayName={data.displayName}
        id={data.userId}
        avatarColor={data.avatarColor}
        onClick={editOnClick}
        deleteOnClick={deleteOnClick}
      ></QuestionDetailUserFooter>
    </>
  ) : null;
};
