import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from "../atoms/SvgComponents";
import styled from "styled-components";

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
        <Link to="/main">
          <LogoIcon />
        </Link>
      </HeaderLogoBox>
    );
} 

export default HeaderLogo;


