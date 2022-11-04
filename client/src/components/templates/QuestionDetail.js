import {
  QuestionDetailsideBox,
  QuestionDetailContentBox,
} from '../atoms/QuestionDetailContainer';
import { QuestionDetailSidebar } from '../molecules/QuestionDetailSidebar';
import { QuestionDetailUserFooter } from '../organism/QuestionDetailUserFooter';
import QuestionViewer from '../atoms/QuestionViewer';

//본문내용과 추천수를 포함하는 컴포넌트
export const QuestionDetail = ({ data }) => {
  return data ? (
    <>
      <QuestionDetailContentBox>
        <QuestionDetailsideBox>
          <QuestionDetailSidebar vote={data.votes}></QuestionDetailSidebar>
        </QuestionDetailsideBox>
        <QuestionViewer content={data.content}></QuestionViewer>
      </QuestionDetailContentBox>
      <QuestionDetailUserFooter
        date={data.createdAt}
        displayName={data.displayName}
      ></QuestionDetailUserFooter>
    </>
  ) : null;
};
