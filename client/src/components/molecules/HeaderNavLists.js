// import styled from 'styled-components';
// import { useState } from 'react';
import HeaderNav from '../atoms/HeaderNav';
import { useSelector } from 'react-redux';

const HeaderNavLists = () => {
  //   const isDesktopSize = useMediaQuery({ query: '(min-width: 660px)' });
  // const [isLogin] = useState(false);

  const isLogin = useSelector((store) => store.authReducer.userStatus);

  console.log(isLogin);

  return (
    <>
      {!isLogin ? (
        <>
          <HeaderNav>
            <a href="https://stackoverflow.co/">About</a>
          </HeaderNav>
          <HeaderNav>
            <a href="https://stackoverflow.co/advertising/">Products</a>
          </HeaderNav>
          <HeaderNav>
            <a href="https://stackoverflow.co/teams/">For Teams</a>
          </HeaderNav>
        </>
      ) : (
        <HeaderNav>
          <a href="https://stackoverflow.co/advertising/">Products</a>
        </HeaderNav>
      )}
    </>
  );
};

export default HeaderNavLists;
