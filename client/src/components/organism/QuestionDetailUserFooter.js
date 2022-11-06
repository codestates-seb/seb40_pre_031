import { QuestionDetailUserFooterBox } from '../atoms/QuestionDetailContainer';
import { QuestionDetailUserProfile } from '../molecules/QuestionDetailUserProfile';

//작성자정보, 작성일자 edit이 있는 곳
export const QuestionDetailUserFooter = (props) => {
  return (
    <QuestionDetailUserFooterBox>
      <div className="Editdiv">
        <button onClick={props.onClick}>Edit</button>
      </div>
      <QuestionDetailUserProfile {...props}></QuestionDetailUserProfile>
    </QuestionDetailUserFooterBox>
  );
};
