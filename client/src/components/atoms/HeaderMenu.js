import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import {MenuX} from '../atoms/SvgComponents'
import {useState} from 'react';
import Leftnavlist from './../molecules/LeftNavList';

const DropdownBox = styled.div`
position: relative;
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

  const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
      <>
        <DropdownBox onClick={() => setIsMenuOpened(!isMenuOpened)}>
          {!isMenuOpened ? 
          <AiOutlineMenu size={18} /> : 
          <>
            <MenuX size={18} />
              <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                  }}
                >
                  <Leftnavlist />
                </div>
              </div>
            </>
            }
        </DropdownBox>
      </>
    );
};

export default HeaderMenu;