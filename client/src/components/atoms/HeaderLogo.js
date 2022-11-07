import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../atoms/SvgHeaderIcons';

//Stackoverflow 로고 눌렀을 때, 메인페이지 "/"로 연결
const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HeaderLogo = () => {
  return (
    <HeaderLogoBox>
      <Link to="/main">
        <LogoIcon />
      </Link>
    </HeaderLogoBox>
  );
};

export default HeaderLogo;
