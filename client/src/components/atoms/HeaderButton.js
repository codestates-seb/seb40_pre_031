import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState} from 'react';
import HeaderInfo from '../atoms/HeaderInfo';


const LinkButton = styled.button`
  height: 35px;
  margin-right: 8px;
  background-color: ${(props) => props.backgroundColor || "#e1ecf4"};
  color: ${(props) => props.color || "#39739d"};
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid #39739d;
  border-radius: 4px;
  :hover {
    background-color: #b3d3ea;
  }
`;

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