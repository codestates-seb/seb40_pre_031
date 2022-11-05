import styled from 'styled-components';
import { useState } from 'react';

//Join 버튼 구현
const ButtonBox = styled.div`
  position: relative;
  display: inline-block;
  padding: 0px;
`;

const ButtonA = styled.div`
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

const ButtonB = styled.div`
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
  background-color: var(--blue-200);

  :hover {
    color: var(--white);
    background-color: var(--red-800);
  }
`;

const RightSidebarBtn = () => {
  //Join 버튼을 눌렀을 때와 누르지 않았을 때 달라지는 스타일
  const [BtnChanged, setBtnChanged] = useState(false);
  //Join 버튼을 눌렀을 때와 누르지 않았을 때 달라지는 글자
  const [IsJoined, setIsJoined] = useState(false);

  return (
    <>
      <ButtonBox onClick={() => setBtnChanged(!BtnChanged)}>
        {!BtnChanged ? (
          <ButtonA>Join</ButtonA>
        ) : (
          <>
            <ButtonB onClick={() => setIsJoined(!IsJoined)}>
              {IsJoined ? 'Joined' : 'Leave'}
            </ButtonB>
          </>
        )}
      </ButtonBox>
    </>
  );
};

export default RightSidebarBtn;
