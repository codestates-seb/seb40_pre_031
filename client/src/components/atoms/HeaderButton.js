import React from 'react';
import styled from "styled-components";

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
    return (
      <div style={{ minWidth: 135 }}>
        <LinkButton>Log in</LinkButton>
        <LinkButton
          backgroundColor="#26a4ff"
          color="white"
        >
          Sign up
        </LinkButton>
      </div>
    );
};

export default HeaderButton;