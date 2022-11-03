import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  align-items: center;
  box-sizing: border-box;
  color: var(--black-600);
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: left;
  padding: ${(props) => props.padding || '4px 4px 4px 30px'};
  text-decoration: none;
  width: 164px;
  :hover {
    color: var(--black-900);
  }
  &.active {
    background: var(--black-050);
    border-right: 5px solid var(--orange);
    color: var(--black-900);
    font-weight: bold;
  }
`;

// 왼쪽 사이드바의 링크 부분 , 라우터의 Navlink를 이용한 페이지 이동
function LeftNavItem({ padding, link, name }) {
  return (
    <StyledLink padding={padding} end to={link}>
      <span>{name}</span>
    </StyledLink>
  );
}

export default LeftNavItem;
