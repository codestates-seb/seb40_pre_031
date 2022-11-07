import styled from 'styled-components';
import { useState } from 'react';

//Join 버튼 박스 구현하기
const ButtonBox = styled.div`
  position: relative;
  display: inline-block;
  padding: 0px;
`;

//처음에 보여주는 기본 버튼
const JoinButton = styled.div`
  font-size: 12px;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  color: var(--blue);
  border: 1px solid var(--blue-400);
  border-radius: 3px;
  outline: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: var(--blue-650);
    color: var(--blue);
  }
`;

//Joined 버튼
const JoinedButton = styled.button`
  font-size: 12px;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  color: var(--blue);
  border: 1px solid var(--blue-200);
  background-color: var(--blue-200);

  border-radius: 3px;
  outline: none;
  text-align: center;
  text-decoration: none;

  //평상시
  cursor: pointer;

  ::before {
    content: 'Joined';
    background-color: var(--blue-200);
  }
  :hover {
    animation-play-state: paused;
    background-color: var(--red-800);
  }
  //호버시
  :hover::before {
    content: 'Leave';
    background-color: var(--red-800);
    color: var(--white);
  }
`;

//버튼 클릭 시 joined로, joined 상태에서 hover시 leave로
const RightSidebarBtn = () => {
  //버튼을 클릭 전&후
  const [IsJoined, setIsJoined] = useState(false);

  return (
    <>
      {/* 조인 버튼을 클릭 전 <JoinButton>, 클릭 후 <JoinedButton>*/}
      <ButtonBox onClick={() => setIsJoined(!IsJoined)}>
        {!IsJoined ? <JoinButton>Join</JoinButton> : <JoinedButton />}
      </ButtonBox>
    </>
  );
};

export default RightSidebarBtn;
