import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  border: 1px solid var(--white);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: ${(props) => props.bgcolor || 'var(--orange)'};
  color: ${(props) => props.color || 'var(--white)'};
  font-size: 11px;
  height: 27.88px;
  width: 139px;
  padding: 6.6px;
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
