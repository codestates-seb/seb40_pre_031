import NotFound from '../templates/NotFound';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black-050);
`;

function Error404Page() {
  document.title = 'Page not found - stackoverflow'; // 404 에러 페이지 이름
  return (
    <ErrorPageContainer>
      <NotFound></NotFound>
    </ErrorPageContainer>
  );
}

export default Error404Page;
