import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InfoIcon } from '../../assets/icon/Header-InfoIcon.svg';

const InfoBox = styled.div`
    padding: 0 10px;
    position: relative;
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.1);
`;
const HeaderInfo = () => {
  return (
    <InfoBox>
        <InfoIcon />
    </InfoBox>
  );
}; 

export default HeaderInfo