import styled from 'styled-components';
import LeftNavList from '../molecules/LeftNavList';

const Container = styled.div`
  align-items: center;
  background: var(--white);
  display: flex;
  height: 100%;
  top: 0px;
  position: sticky;
  padding-top: 24px;
  width: 164px;
  z-index: 10;
`;
// 왼쪽 사이드바를 재활용하기 위한 Organism

function LeftNav() {
  return (
    <Container>
      <LeftNavList></LeftNavList>
    </Container>
  );
}

export default LeftNav;
