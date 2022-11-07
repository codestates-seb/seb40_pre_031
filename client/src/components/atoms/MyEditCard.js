/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { Edit } from './SvgMyIcons';
import { myApi } from '../../api/apis';
import { useSelector, useDispatch } from 'react-redux';

const MyEditCard = () => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(0);
  const { userId } = useSelector((state) => ({
    userId: state.authReducer.userId,
  }));

  const handleNameChange = useCallback(
    (name) => {
      setName(name);
    },
    [name]
  );

  const handlePasswordChange = useCallback(
    (password) => {
      setPassword(password);
    },
    [password]
  );

  const handleColorChange = useCallback(
    (color) => {
      setColor(color);
    },
    [color]
  );

  const handleName = () => {
    confirm(`이름을 ${name}으로 바꾸시겠습니까?`) &&
      myApi
        .patchName(userId, name)
        .then((res) => {
          setUser(res);
          location.reload();
        })
        .catch((err) => console.log(err));
  };

  const handlePassword = () => {
    let regex = new RegExp(
      '^.*(?=^.{8,20}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$'
    );
    regex.test(password);

    confirm(`비밀번호를 ${password}로 바꾸시겠습니까?`) &&
      myApi
        .patchPassword(userId, password)
        .then((res) => {
          setUser(res);
          location.reload();
        })
        .catch((err) => console.log(err));
  };

  const handleColor = () => {
    confirm(`프로필 색깔을 ${color}으로 바꾸시겠습니까?`) &&
      myApi
        .patchColor(userId, color)
        .then((res) => {
          setUser(res);
          location.reload();
        })
        .catch((err) => console.log(err));
  };

  return (
    <CardLayout>
      <CardBox>
        <Edit /> <h2>Edit Display Name</h2>
        <input
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        <button onClick={handleName}>수정</button>
      </CardBox>
      <CardBox>
        <Edit /> <h2>Edit Password</h2>
        <input
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <button onClick={handlePassword}>수정</button>
      </CardBox>
      <CardBox>
        <Edit /> <h2>Edit Color</h2>
        <input
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <button onClick={handleColor}>수정</button>
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
