import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoIcon } from "../atoms/SvgComponents";

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.1);
  }
`;

const HeaderLogo = () => {
    return (
      <HeaderLogoBox>
        <Link to="/">
          <LogoIcon />
        </Link>
      </HeaderLogoBox>
    );
} 

export default HeaderLogo;


