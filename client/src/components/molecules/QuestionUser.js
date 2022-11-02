import styled from 'styled-components';
import Avartar from '../atoms/Avartar';

const UserBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;

  span {
    color: var(--black-500);
    font-size: 12px;
  }
`;

const Username = styled.a`
  color: var(--theme-link-color-hover);
  font-size: 12px;
`;

const UserInfo = styled.span`
  color: var(--black-600);
  font-size: 12px;
  font-weight: 700;
`;

const QuestionUser = () => {
  return (
    <UserBox>
      <Avartar />
      <Username>shravs</Username>
      <UserInfo>11 </UserInfo>
      <span>asked 57 secs ago</span>
    </UserBox>
  );
};

export default QuestionUser;
