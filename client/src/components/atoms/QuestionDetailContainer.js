import styled from 'styled-components';

//추천수, 화살표를담는 div를 담는 div
const QuestionDetailsideBox = styled.div`
  width: 52px;
  height: auto;
  margin: 0 16px 0 0;
  border: solid 1px orange;
`;

//추천수와 화살표를 담고있는 div 최소 높이가 102px를 유지하기위함
const QuestionDetailSubsideBox = styled.div`
  width: 36px;
  heigth: 102px;
  display: flex;
  border: solid 1px blue;
  flex-direction: column;
  .Arrow {
    cursor: pointer;
  }
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

//코멘트부분을 제외한 본문,추천수를 포함하는 div
const QuestionDetailContentBox = styled.div`
  width: 750px;
  height: auto;
  padding: 20px;
  display: flex;
  border: solid 1px red;
  .toastui-editor-contents {
    width: 640px;
  }
`;

const QuestionDetailUserProfileBox = styled.div`
  width: 200px;
  height: 85px;
  display: flex;
  border: solid 1px red;
  padding: 10px;
  flex-direction: column;
  color: var(--black-500);
  div {
    font-size: 12px;
  }
  .UserProfile {
    font-size: 15px;
    display: flex;
    margin-top: 10px;
    color: var(--theme-link-color);
    div {
      width: 32px;
      height: 32px;
      border: solid 1px red;
      margin-right: 10px;
    }
  }
`;

//질문상세페이지의 회원정보,edit이 들어있는 박스
const QuestionDetailUserFooterBox = styled.div`
  width: 640px;
  height: 100px;
  margin: 16px 0 16px 88px;
  border: solid 1px red;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  .Editdiv {
    margin: 10px;
    color: var(--black-500);
  }
`;

export {
  QuestionDetailsideBox,
  QuestionDetailSubsideBox,
  QuestionDetailContentBox,
  QuestionDetailVoteBox,
  QuestionDetailUserProfileBox,
  QuestionDetailUserFooterBox,
};
