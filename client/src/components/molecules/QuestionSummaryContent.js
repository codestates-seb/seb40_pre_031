import styled from 'styled-components';
import Avartar from '../atoms/Avartar';

const QuestionSummaryContent = ({ title, content, displayname, createdAt }) => {
  return (
    <QuestionSummaryContenLayout>
      <h3>
        <Title>{title}</Title>
      </h3>
      <QuestionContent>{content}</QuestionContent>
      <UserBox>
        <Avartar />
        <Username>{displayname}</Username>
        <span>{createdAt}</span>
      </UserBox>
    </QuestionSummaryContenLayout>
  );
};

export default QuestionSummaryContent;

const QuestionSummaryContenLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;

  h3 {
    vertical-align: baseline;
    font-weight: 400;
  }
`;

const Title = styled.a`
  width: 595px;
  height: 34px;
  color: var(--theme-post-title-color);
  word-break: break-word;
  overflow-wrap: break-word;
`;

const QuestionContent = styled.div`
  display: flex;
  color: var(--fc-medium);
  font-size: 13px;
  flex-wrap: wrap;

  width: 595px;
  height: 34px;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  flex-wrap: wrap;

  span {
    color: var(--black-500);
    font-size: 12px;
  }
`;

const Username = styled.a`
  color: var(--theme-link-color-hover);
  font-size: 12px;
  margin: 0 5px;
`;
