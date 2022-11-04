import styled from 'styled-components';
import HeaderMenu from '../atoms/HeaderMenu';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderNav from '../atoms/HeaderNav';
import HeaderSearch from '../atoms/HeaderSearch';
import HeaderButton from '../atoms/HeaderButton';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const HeaderBox = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #f8f9f9;
  margin: 0 auto;
  border-top: 3px solid #f48225;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  position: sticky; //항상 헤더 상단 고정
  padding: 0px 50px;
  z-index: 99;
`;

const AboutUrl = 'https://stackoverflow.co/';
const ForTeamsUrl = 'https://stackoverflow.co/teams/';

function HeaderTemplate() {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 660px)' });
  const [isLogin] = useState(false);

  return (
    <HeaderBox>
      <HeaderMenu />
      <HeaderLogo />
      {isDesktopSize && !isLogin ? (
        <>
          <HeaderNav to={{ AboutUrl }}>About</HeaderNav>
          <HeaderNav>Products</HeaderNav>
          <HeaderNav to={{ ForTeamsUrl }}>For Teams</HeaderNav>
        </>
      ) : (
        <HeaderNav>Products</HeaderNav>
      )}
      <HeaderSearch />
      <HeaderButton />
    </HeaderBox>
  );
}

export default HeaderTemplate;
