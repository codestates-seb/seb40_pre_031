/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { myApi } from '../../api/apis';

import Avartar from '../atoms/Avartar';
import MyEditCard from '../atoms/MyEditCard';
import LeftNav from '../organism/LeftNav';

const MyPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    myApi
      .getUser(10)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(users);
  useEffect(() => {
    myApi
      .patchName(10, '김안녕34')
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(users);

  return (
    <MyPageLayout>
      <LeftNav></LeftNav>
      <div className="my">
        <div className="name">
          <Avartar />
          <h1>이름</h1>
        </div>
        <MyEditCard />
      </div>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  display: flex;

  .my {
    margin: 12px;

    .name {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      h1 {
        margin-left: 15px;
      }
    }
  }
`;
