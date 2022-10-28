import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  width: 139px;
  height: 27.88px;
  font-size: 11px;
  background-color: ${(props) => props.bgcolor || '#F48225'};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ffffff;
  padding: 6.6px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  color: ${(props) => props.color || '#ffffff'};
  cursor: pointer;
`;

// 사이드바 가장 아래 위치한 Promo 부분의 버튼 기본값 주황색 버튼 , props를 이용해 하얀색버튼으로 활용
function LeftNavButton({ name, bgcolor, color, link }) {
  return (
    <a href={link}>
      <Button bgcolor={bgcolor} color={color}>
        {name}
      </Button>
    </a>
  );
}

export default LeftNavButton;
