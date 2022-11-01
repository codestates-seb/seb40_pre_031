import styled from 'styled-components';

// 질문 작성 헤더부분 (h1, 백그라운드 이미지 부분)
const Header = styled.div`
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-repeat: no-repeat;
  background-position: right bottom;
  display: flex;
  padding: 50px 0px 57px;
  h1 {
    font-size: 31px;
    color: var(--black-800);
  }
`;

function AskQuestionHeader() {
  return (
    <Header>
      <h1> Ask a public question</h1>
    </Header>
  );
}

export default AskQuestionHeader;
