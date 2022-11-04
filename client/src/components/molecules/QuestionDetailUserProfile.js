import { QuestionDetailUserProfileBox } from '../atoms/QuestionDetailContainer';
export const QuestionDetailUserProfile = ({ date, displayName }) => {
  return (
    <QuestionDetailUserProfileBox>
      <div>asked {date}</div>
      <div className="UserProfile">
        <div></div>
        {displayName}
      </div>
    </QuestionDetailUserProfileBox>
  );
};
