import { QuestionDetailUserProfileBox } from '../atoms/QuestionDetailContainer';
export const QuestionDetailUserProfile = ({ date, displayName }) => {
  const randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  console.log(randomColor);
  return (
    <QuestionDetailUserProfileBox randomColor={randomColor}>
      <div>asked {date}</div>
      <div className="UserProfile">
        <div></div>
        {displayName}
      </div>
    </QuestionDetailUserProfileBox>
  );
};
