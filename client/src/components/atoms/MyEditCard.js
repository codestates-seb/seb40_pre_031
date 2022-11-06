/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { Edit } from './SvgMyIcons';

const MyEditCard = () => {
  const [color, setColor] = useState('');
  const [user, setUser] = useState(0);
  const handleColorChange = useCallback(
    // 온체인지 이벤트를 담당할 함수다.
    (color) => {
      // 바뀌는 컬러값을 매개변수로 받아서
      setColor(color); // setColor 안에 넣어줘서 color 를 변경해줄거다.
    },
    [color]
  ); // 단 컬러 데이터가 바뀔때마다 이 함수는 갱신된다.

  return (
    <CardLayout>
      <CardBox>
        <Edit /> <h2>Edit Display Name</h2>
      </CardBox>
      <CardBox>
        <Edit /> <h2>Edit Password</h2>
      </CardBox>
      <CardBox>
        <Edit /> <h2>Edit Color</h2>
        <input
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <ChromePicker
          color={color}
          onChange={(color) => handleColorChange(color.hex)}
        />
      </CardBox>
    </CardLayout>
  );
};

export default MyEditCard;

const CardLayout = styled.div`
  display: flex;
`;

const CardBox = styled.div`
  display: block;
  margin: 12px;

  flex: 1 1 0%;
  border: 1px solid var(--bc-medium);
  border-radius: 5px;
  width: 250px;
  height: 200px;
  padding: 12px;
  background-color: var(--white);

  h2 {
    margin-right: auto;
  }
`;
