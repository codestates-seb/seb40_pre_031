import {
  QuestionDetailsideBox,
  QuestionDetailContentBox,
  QuestionDetailSubsideBox,
  Temp,
} from '../atoms/QuestionDetailContainer';
import { QuestionDetailSidebar } from '../molecules/QuestionDetailSidebar';
export const QuestionDetail = () => {
  return (
    <QuestionDetailContentBox>
      <QuestionDetailsideBox>
        <QuestionDetailSubsideBox>
          <QuestionDetailSidebar></QuestionDetailSidebar>
        </QuestionDetailSubsideBox>
      </QuestionDetailsideBox>
      <Temp></Temp>
    </QuestionDetailContentBox>
  );
};
