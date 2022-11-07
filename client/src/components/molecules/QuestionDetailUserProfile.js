import { QuestionDetailUserProfileBox } from '../atoms/QuestionDetailContainer';
import { TimeCheck } from '../../actions/index';
export const QuestionDetailUserProfile = ({
  date,
  displayName,
  avatarColor,
}) => {
  return (
    <QuestionDetailUserProfileBox avatarColor={avatarColor}>
      <div>asked {TimeCheck(date)}</div>
      <div className="UserProfile">
        <div></div>
        {displayName}
      </div>
    </QuestionDetailUserProfileBox>
  );
};
