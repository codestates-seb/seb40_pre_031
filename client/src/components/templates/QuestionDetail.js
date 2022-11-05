import {
  QuestionDetailsideBox,
  QuestionDetailContentBox,
} from '../atoms/QuestionDetailContainer';
import { QuestionDetailSidebar } from '../molecules/QuestionDetailSidebar';
import { QuestionDetailUserFooter } from '../organism/QuestionDetailUserFooter';
import QuestionViewer from '../atoms/QuestionViewer';
import QuestionEditor from '../atoms/QuestionEditor';
import { useState, useRef } from 'react';

//본문내용과 추천수를 포함하는 컴포넌트
export const QuestionDetail = ({ data }) => {
  data.voteStatus = data.voteStatus || data.status;
  const [edit, setEdit] = useState(false);
  const editorRef = useRef(null);
  const editOnClick = () => {
    console.log('edit');
    if (edit === true) {
      const value = editorRef.current.getInstance().getMarkdown();
      console.log(value);
    }
    setEdit(!edit);
  };

  return data ? (
    <>
      <QuestionDetailContentBox>
        <QuestionDetailsideBox>
          <QuestionDetailSidebar
            vote={data.votes}
            voteStatus={data.voteStatus}
          ></QuestionDetailSidebar>
        </QuestionDetailsideBox>
        {!edit && <QuestionViewer content={data.content}></QuestionViewer>}
        {edit && (
          <QuestionEditor
            content={data.content}
            ref={editorRef}
          ></QuestionEditor>
        )}
      </QuestionDetailContentBox>
      <QuestionDetailUserFooter
        date={data.createdAt}
        displayName={data.displayName}
        onClick={editOnClick}
      ></QuestionDetailUserFooter>
    </>
  ) : null;
};
