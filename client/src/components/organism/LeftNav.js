import React from 'react';
import styled from 'styled-components';
import LeftNavList from '../molecules/LeftNavList';

const Container = styled.div`
  position: sticky;
  top: 0px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  width: 164px;
  height: 100%;
  background: #ffffff;
  z-index: 10;
`;
// 왼쪽 사이드바를 재활용하기 위한 Organism

function Leftnav() {
  return (
    <Container>
      <LeftNavList></LeftNavList>
    </Container>
  );
}

export default Leftnav;
