import HeaderNav from '../atoms/HeaderNav';
import { useSelector } from 'react-redux';

const HeaderNavLists = () => {
  const isLogin = useSelector((store) => store.authReducer.userStatus);

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
