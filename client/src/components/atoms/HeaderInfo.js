import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as InfoHamburger } from '../../assets/icon/Header-InfoIcon.svg';
import { SvgHelp } from './SvgHeaderIcon';
import { BsPersonCircle } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const DropDownBox = styled.div`
  display: block;

  > ul {
    width: 120px;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    font-size: 13px;
  }
  > li {
    font-size: 14px;
    cursor: pointer;
  }
`;

const HeaderInfo = () => {
  // Header-오른쪽 드롭박스
  const [InfoOpened, setInfoOpened] = useState(false);
  return (
    <>
      <DropDownBox onClick={() => setInfoOpened(!InfoOpened)}>
        <InfoHamburger />
        {!InfoOpened && (
          <ul style={{ position: 'absolute', top: '100%' }}>
            <li>
              <BsPersonCircle />
              My Page
            </li>
            <li>
              <SvgHelp />
              Help
            </li>
            <li>
              <RiLogoutBoxRLine />
              Log Out
            </li>
          </ul>
        )}
      </DropDownBox>
    </>
  );
};

export default HeaderInfo;
