import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const DropdownBox = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.1);
  }
`;

const HeaderMenu = () => {
    return (
      <DropdownBox>
        <AiOutlineMenu size={18} />
      </DropdownBox>
    );
};

export default HeaderMenu;