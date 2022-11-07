/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderInfo from './HeaderInfo';
import authReducer from './../../reducers/authReducer';
import Avartar from '../atoms/Avartar';
import { useEffect } from 'react';

// 로그인 전: Login버튼, Signup버튼
// 로그인 후: Hello {avatarColor}{displayName}}], 햄버거정보버튼
const LinkButton = styled.button`
  height: 35px;
  margin-right: 5px;
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid var(--powder-700);
  border-radius: 4px;

  &.login {
    background-color: #e1ecf4;
    color: var(--powder-700);
  }

  &.signup {
    background-color: #26a4ff;
    color: white;
  }

  &:hover {
    background-color: var(--powder-300);
  }
`;

const InfoBox = styled.div`
  padding: 0 6px;
  position: relative;
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

//로그인 전 or 후, 상태에 따라 달라지는 Header & 로그인된 userName & 프로필 색 보여주기
const HeaderButton = () => {
  const isLogin = useSelector((store) => store.authReducer.userStatus);
  const userName = useSelector((store) => store.authReducer.displayName);
  const avatarColor = useSelector((store) => store);
  // console.log(avatarColor);

  // Link to => useNavigate 수정하여 버튼 클릭시 바로 이동할 수 있게 함
  const Navigate = useNavigate();
  const gotoLogin = () => {
    Navigate('/login');
  };
  const gotoSignup = () => {
    Navigate('/signup');
  };
  // 로그아웃 후 /main 이동
  useEffect(() => {
    if (!isLogin) Navigate('/main');
  }, [isLogin]);

  return (
    <>
      {!isLogin ? (
        <div style={{ minWidth: 135 }}>
          {/* 문제 찾음 */}
          <LinkButton className="login" onClick={gotoLogin}>
            Log in
          </LinkButton>
          <LinkButton className="signup" onClick={gotoSignup}>
            Sign up
          </LinkButton>
        </div>
      ) : (
        <>
          Hello! <Avartar avatarColor={avatarColor} />
          <span>{userName}</span>
          <InfoBox>
            <HeaderInfo />
          </InfoBox>
        </>
      )}
    </>
  );
};

export default HeaderButton;
