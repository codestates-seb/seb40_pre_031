import styled from 'styled-components';
import HeaderMenu from '../atoms/HeaderMenu';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderSearch from '../atoms/HeaderSearch';
import HeaderButton from '../atoms/HeaderButton';
import HeaderNavLists from '../molecules/HeaderNavLists';

//로그인 전: 햄버거-로고-링크리스트-검색바-로그인.로그아웃 버튼
//로그인 후:        로고-products-검색바-Hello,사용자이름-햄버거(로그아웃)
const HeaderBox = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #f8f9f9;
  margin: 0 auto;
  border-top: 3px solid #f48225;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  padding: 0px 50px;
  position: fixed; //항상 헤더 상단 고정
  top: 0;
  padding: 0px 50px;
`;

function HeaderTemplate() {
  return (
    <HeaderBox>
      {/* 로그인후 안보여야 하는 Menu 햄버거 */}
      <HeaderMenu />
      {/* 항상 보여주는 logo */}
      <HeaderLogo />
      {/* 로그인 전 3가지, 로그인 후 Products만 보여줌 */}
      <HeaderNavLists />
      {/* 항상 보여주는 Search바 */}
      <HeaderSearch />
      {/* 로그인 전, 버튼-로그인 화원가입 / 로그아웃, 이름+ 햄버거아이콘 */}
      <HeaderButton />
    </HeaderBox>
  );
}

export default HeaderTemplate;
