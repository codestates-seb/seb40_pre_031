import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { MenuX } from './SvgHeaderIcons';
import Leftnavlist from '../molecules/LeftNavList';

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

const LeftnavBox = styled.div`
  position: absolute;
  top: 100%;
`;

const HeaderMenu = () => {
  const [MenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <DropdownBox onClick={() => setIsMenuOpened(!MenuOpened)}>
        {!MenuOpened ? (
          <AiOutlineMenu size={18} />
        ) : (
          <>
            <MenuX size={18} />
            <div
              style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
              <LeftnavBox>
                <Leftnavlist />
              </LeftnavBox>
            </div>
          </>
        )}
      </DropdownBox>
    </>
  );
};

export default HeaderMenu;
