/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderInfo from './HeaderInfo';

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

//로그인 전 or 후, 상태에 따라 달라지는 Header
const HeaderButton = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {!isLogin ? (
        <div style={{ minWidth: 135 }}>
          {/* 문제 찾음 */}
          <LinkButton className="login">
            <Link to="/login">Log in</Link>
          </LinkButton>
          <LinkButton className="signup">
            <Link to="/signup">Sign up</Link>
          </LinkButton>
        </div>
      ) : (
        <>
          <div>
            Hello! <span>Name</span>
          </div>
          <InfoBox>
            <HeaderInfo />
          </InfoBox>
        </>
      )}
    </>
  );
};

export default HeaderButton;
