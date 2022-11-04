import styled from 'styled-components';
import LeftNavList from '../molecules/LeftNavList';

const Container = styled.div`
  align-items: center;
  background: var(--white);
  display: flex;
  height: 100vh;
  top: 0px;
  position: sticky;
  margin-top: 5px;
  width: 164px;
  z-index: 10;
  border-right: 1px solid var(--black-075);
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
