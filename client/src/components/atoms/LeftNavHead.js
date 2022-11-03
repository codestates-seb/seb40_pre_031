import styled from 'styled-components';

const Itemhead = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 156px;
  height: 14.38px;
  font-size: 11px;
  margin: 16px 0 4px 8px;
  color: var(--black-500);
`;

// 왼쪽사이드바의 목록 제목 부분
function LeftNavHead({ name }) {
  return <Itemhead>{name}</Itemhead>;
}

export default LeftNavHead;
