import styled from 'styled-components';

//추천수, 화살표를담는 div를 담는 div
const QuestionDetailsideBox = styled.div`
  width: 52px;
  // height: ${(height) => height}px;
  heigth: 700px;
  margin: 0 16px 0 0;
`;

//추천수, 화살표를담는 div
const QuestionDetailSubsideBox = styled.div`
  width: 36px;
  heigth: 102px;
  display: flex;
  flex-direction: column;
`;

//추천수
const QuestionDetailVoteBox = styled.div`
  width: 34px;
  height: 30px;
  margin: 2px;
  color: var(--black-500);
  font-size: var(--fs-title);
  display: flex;
  justify-content: center;
`;

const QuestionDetailContentBox = styled.div`
  width: 700px;
  height: 700px;
  padding: 20px;
  display: flex;
`;

const QuestionDetailUserProfileBox = styled.div`
  width: 200px;
  height: 85px;
  display: flex;
  flex-direction: column;
  color: var(--black-500);
`;

const Temp = styled.div`
  width: 680px;
  height: 500px;
  border: solid 1px red;
`;

export {
  QuestionDetailsideBox,
  QuestionDetailSubsideBox,
  QuestionDetailContentBox,
  QuestionDetailVoteBox,
  QuestionDetailUserProfileBox,
  Temp,
};
