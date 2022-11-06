import { QuestionDetailUserFooterBox } from '../atoms/QuestionDetailContainer';
import { QuestionDetailUserProfile } from '../molecules/QuestionDetailUserProfile';
import { useSelector } from 'react-redux';

//작성자정보, 작성일자 edit이 있는 곳
export const QuestionDetailUserFooter = (props) => {
  const textUser = props.id;
  const user = useSelector((state) => state.authReducer.userId);
  const canEdit = textUser === user;

  return (
    <QuestionDetailUserFooterBox>
      <div className="Editdiv">
        {canEdit && <button onClick={props.onClick}>Edit</button>}
        {canEdit && <button>Delete</button>}
      </div>
      <QuestionDetailUserProfile {...props}></QuestionDetailUserProfile>
    </QuestionDetailUserFooterBox>
  );
};
