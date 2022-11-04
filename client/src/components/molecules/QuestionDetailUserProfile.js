import { QuestionDetailUserProfileBox } from '../atoms/QuestionDetailContainer';
export const QuestionDetailUserProfile = ({ date, displayName }) => {
  return (
    <QuestionDetailUserProfileBox>
      <div>asked {date}</div>
      <div className="UserProfile">
        <div>img</div>
        {displayName}
      </div>
    </QuestionDetailUserProfileBox>
  );
};
