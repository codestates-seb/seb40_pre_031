import { QuestionDetailUserFooterBox } from '../atoms/QuestionDetailContainer';
import { QuestionDetailUserProfile } from '../molecules/QuestionDetailUserProfile';
export const QuestionDetailUserFooter = () => {
  return (
    <QuestionDetailUserFooterBox>
      <div className="Editdiv">Edit</div>
      <QuestionDetailUserProfile></QuestionDetailUserProfile>
    </QuestionDetailUserFooterBox>
  );
};
