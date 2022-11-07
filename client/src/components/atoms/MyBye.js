/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Delete } from './SvgMyIcons';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { myApi } from '../../api/apis';
// 메인페이지 호출

const MyBye = () => {
  const userId = useSelector((store) => store.authReducer.userId);
  const handleUser = () => {
    confirm(`정말 탈퇴하시겠습니까? 수정 및 삭제 기능을 이용할 수 없습니다`) &&
      myApi
        .deleteUser(userId)
        .then((res) => {
          return <Navigate to="/main" element={<MainPage />} />;
        })
        .catch((err) => console.log(err));
  };
  return (
    <CardBox>
      <h2>회원탈퇴</h2>
      <Delete onClick={handleUser} />
    </CardBox>
  );
};

export default MyBye;

const CardBox = styled.div`
  display: flex;
  margin: 12px;

  border: 1px solid var(--bc-medium);
  border-radius: 5px;
  width: 250px;
  height: 100px;
  padding: 12px;
  background-color: var(--white);
  justify-content: center;
  align-items: center;

  h2 {
    margin-right: auto;
  }
`;
