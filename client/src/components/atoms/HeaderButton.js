import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState} from 'react';
import HeaderInfo from '../atoms/HeaderInfo';


const LinkButton = styled.button`
  height: 35px;
  margin-right: 8px;
  background-color: ${(props) => props.backgroundColor || '#e1ecf4'};
  color: ${(props) => props.color || 'var(--powder-700)'};
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid var(--powder-700);
  border-radius: 4px;
  :hover {
    background-color: var(--powder-300);
  }
`;

//로그인 전 or 후, 상태에 따라 달라지는 Header
const HeaderButton = () => {
  const [isLogin, setIsLogin] = useState(true);

    return (
      <>
        {!isLogin ? (
          <div style={{ minWidth: 135 }}>
            <LinkButton>Log in</LinkButton>
            <LinkButton backgroundColor="#26a4ff" color="white">
              <Link to="/signup">Sign up</Link>
            </LinkButton>
          </div>
        ) : (
          <>
          <div> Hi! Name </div>
          <HeaderInfo/>
          </>
        )}
      </>
    );
};

export default HeaderButton;