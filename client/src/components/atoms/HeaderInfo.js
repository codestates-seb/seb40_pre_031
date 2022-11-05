import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as InfoHamburger } from '../../assets/icon/Header-InfoIcon.svg';
import { SvgHelp } from './SvgHeaderIcon';
import { BsPersonCircle } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';

//로그아웃 관련 import
import { logoutAction } from '../../actions';
import { useDispatch } from 'react-redux';

// 로그인 후, 이름 + Header-오른쪽 드롭박스
const DropDownBox = styled.div`
  display: block;
  padding: 12px;
  top: 100%;
`;

const Container = styled.div`
  align-items: center;

  ul {
    padding: 0;
    position: absolute;
    top: 100%;
    width: 140px;
    list-style: none;
    background: var(--white);
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(223, 227, 236);
    border-radius: 3px;
  }
`;

const DropdownItem = styled.li`
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ListText = styled.span`
  font-size: 14px;
  font-weight: 450;
`;
const HeaderInfo = () => {
  //InfoHamburger아이콘 누르면  myPage,Help,LogOut 보여줌
  const [InfoOpened, setInfoOpened] = useState(true);
  //로그아웃 누르면 로그아웃 하기
  const dispatch = useDispatch();
  // const onLogout = (e) => {
  const onLogout = () => {
    // e.preventDefault();
    dispatch(logoutAction()); // logout
    // page move
  };

  return (
    <>
      <DropDownBox onClick={() => setInfoOpened(!InfoOpened)}>
        <InfoHamburger />
        <Container>
          {!InfoOpened && (
            <ul>
              <DropdownItem>
                <BsPersonCircle size={22} style={{ marginRight: '4px' }} />
                <ListText>My Page</ListText>
              </DropdownItem>
              <DropdownItem>
                <SvgHelp />
                <ListText style={{ margin: '4px' }}>
                  <a href="https://stackoverflow.com/help">Help</a>
                </ListText>
              </DropdownItem>

              {/* 로그아웃을 누르면, 로그아웃 action을 가져와 .then 에 넣기 */}
              <DropdownItem
                onClick={onLogout}
                style={{
                  borderTop: '1.5px solid #525960',
                  color: 'var(--black-600)',
                }}
              >
                <RiLogoutBoxRLine size={24} />
                <ListText>Log Out</ListText>
              </DropdownItem>
            </ul>
          )}
        </Container>
      </DropDownBox>
    </>
  );
};

export default HeaderInfo;
