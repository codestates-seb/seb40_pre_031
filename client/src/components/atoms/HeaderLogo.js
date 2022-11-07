import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../atoms/SvgHeaderIcons';
import { useSelector } from 'react-redux';

//Stackoverflow 로고 눌렀을 때, 메인페이지 "/main"로 연결
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
  const isLogin = useSelector((store) => store.authReducer.userStatus);
  return (
    <HeaderLogoBox>
      {isLogin ? (
        <Link to="/">
          <LogoIcon />
        </Link>
      ) : (
        <Link to="/main">
          {' '}
          <LogoIcon />
        </Link>
      )}
    </HeaderLogoBox>
  );
};

export default HeaderLogo;
