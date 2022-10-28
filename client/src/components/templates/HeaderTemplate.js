import styled from 'styled-components'
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderSearch from '../atoms/HeaderSearch';
import HeaderButton from '../atoms/HeaderButton';
import HeaderMenu from '../atoms/HeaderMenu';
import HeaderLinkTexts from './../molecules/HeaderLinkTexts';

import { useMediaQuery } from "react-responsive";

const HeaderWrapper = styled.header`
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
`;

function HeaderTemplate(){

  const isTabletOrMobile  = useMediaQuery({ query: '(min-width: 660px)' })

    return (
      <HeaderWrapper>
        <HeaderMenu />
        <HeaderLogo />
        {isTabletOrMobile  &&<HeaderLinkTexts />}
        <HeaderSearch />
        <HeaderButton />
      </HeaderWrapper>
    );
}

export default HeaderTemplate;