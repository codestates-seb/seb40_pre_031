import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 164px;
  height: 100%;
  padding: ${(props) => props.padding || '4px 4px 4px 30px'};
  text-decoration: none;
  color: #525960;
  cursor: pointer;
  :hover {
    color: #0c0d0e;
  }
  &.active {
    background: #f1f2f3;
    color: #0c0d0e;
    border-right: 5px solid #f48224;
    font-weight: bold;
  }
`;

// 왼쪽 사이드바의 링크 부분 , 라우터의 Navlink를 이용한 페이지 이동
function LeftNavItem({ padding, link, name }) {
  return (
    <StyledLink padding={padding} end to={link}>
      <span>{name}</span>
    </StyledLink>
  );
}

export default LeftNavItem;
