import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SpotAlertXL } from '../atoms/SvgComponents';
import { useSelector } from 'react-redux';

const Errorfoam = styled.div`
  width: 710px;
  height: 245px;
  background: var(--black-050);
  display: flex;
  .icon {
    margin-top: -40px;
  }
  .paragraph {
    margin: 16px;
    color: var(--black-800);
    h1 {
      font-size: 27px;
      font-weight: 450;
      margin-bottom: 4px;
    }
    .second {
      margin-bottom: 19px;
      font-size: 19px;
    }
    .content {
      p {
        font-size: 15px;
        display: block;
        margin-bottom: 15px;
      }
      a {
        color: var(--blue);
      }
    }
  }
`;
const NavStyle = styled(NavLink)`
  color: var(--blue);
`;
function NotFound() {
  const isLogined = useSelector((store) => store.authReducer.userStatus);

  return (
    <Errorfoam>
      <div className="icon">
        <SpotAlertXL></SpotAlertXL>
      </div>
      <div className="paragraph">
        <h1>Page not found</h1>
        <div className="second">
          <p>We&apos;re sorry, we couldn&apos;t find the page you requested.</p>
        </div>
        <div className="content">
          <p>
            Try&nbsp;
            <NavStyle to={'/questions'}>
              searching for similar questions
            </NavStyle>
          </p>
          <p>
            Browse our <NavStyle to={'/questions'}>recent questions</NavStyle>
          </p>
          {isLogined && (
            <p>
              Browse <NavStyle to={'/mypage'}>My Page</NavStyle>
            </p>
          )}
          <p>
            If you feel something is missing that should be here,{' '}
            <a href="https://stackoverflow.com/contact">contact us.</a>
          </p>
        </div>
      </div>
    </Errorfoam>
  );
}

export default NotFound;
