import styled from 'styled-components';

//링크로 연결된 About, Products ForTeams 스타일
const LinkItem = styled.li`
  position: relative;
  display: flex;
  white-space: nowrap;
  text-decoration: none;
  color: var(--black-600);
  font-size: 14px;
  padding: 6px 10px;
  cursor: pointer;
  :hover {
    border: none;
    background-color: #e2e6e8;
    border-radius: 15px;
  }
`;

// eslint-disable-next-line react/prop-types
const HeaderNav = ({ children }) => {
  return <LinkItem>{children}</LinkItem>;
};

export default HeaderNav;
