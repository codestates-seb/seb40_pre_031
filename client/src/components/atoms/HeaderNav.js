import React from 'react';
import styled from 'styled-components';

const LinkItem = styled.li`
      position: relative;
      display: flex;
      white-space: nowrap;
      text-decoration: none;
      color: #525960;
      font-size: 14px;
      padding: 6px 10px;
      cursor: pointer;
      :hover {
        border: none;
        background-color: #e2e6e8;
        border-radius: 15px;
      }
`

const HeaderNav = ({children}) => {
    return <LinkItem>{children}</LinkItem>;
};

export default HeaderNav;