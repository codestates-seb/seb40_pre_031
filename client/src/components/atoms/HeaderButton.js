import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderInfo from './HeaderInfo';

const LinkButton = styled.button`
  height: 35px;
  margin-right: 5px;
  background-color: ${(props) => props.backgroundColor || '#e1ecf4'};
  color: ${(props) => props.color || 'var(--powder-700'};
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid var(--powder-700);
  border-radius: 4px;
  :hover {
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
  const [isLogin] = useState(false);

  return (
    <>
      {!isLogin ? (
        <div style={{ minWidth: 135 }}>
          <LinkButton>
            <Link to="/login">Log in</Link>
          </LinkButton>
          <LinkButton backgroundColor="#26a4ff" color="white">
            <Link to="/signup">Sign up</Link>
          </LinkButton>
        </div>
      ) : (
        <>
          <div>
            Hello! <span>Name</span>
          </div>
          <InfoBox>
            <HeaderInfo></HeaderInfo>
          </InfoBox>
        </>
      )}
    </>
  );
};

export default HeaderButton;
