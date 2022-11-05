import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { MenuX } from './SvgHeaderIcons';
import LeftNav from '../organism/LeftNav';
import { useSelector } from 'react-redux';

//왼쪽 햄버거 드롭다운
const DropdownBox = styled.div`
  position: relative;
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HamburgerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const IconBox = styled.div`
  position: absolute;
  top: 100%;
`;

const HeaderMenu = () => {
  //햄버거 버튼 눌렀을 때, X아이콘으로 변경되고 LeftNav 보여줌
  const [MenuOpened, setIsMenuOpened] = useState(false);
  //로그인 후, 햄버거 버튼 보이지 않음
  const isLogin = useSelector((store) => store.authReducer.userStatus);
  return (
    <>
      <DropdownBox onClick={() => setIsMenuOpened(!MenuOpened)}>
        {!MenuOpened ? (
          !isLogin && <AiOutlineMenu size={18} />
        ) : (
          <>
            <MenuX size={18} />
            <HamburgerContainer>
              <IconBox>
                <LeftNav />
              </IconBox>
            </HamburgerContainer>
          </>
        )}
      </DropdownBox>
    </>
  );
};

export default HeaderMenu;
