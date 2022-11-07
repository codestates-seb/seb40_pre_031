import styled from 'styled-components';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/named
import { OrangeSpotSearch, BlueSpotLock } from '../atoms/SvgMainPageIcons';

//메인페이지
const MainPageBox = styled.div`
  padding: 48px;
  margin: auto;
  background-color: var(--black-010);

  > .home-container {
    padding: 32px;
    background: linear-gradient(
      180deg,
      var(--black-800) 0%,
      var(--black-600) 130%
    );
    border-radius: 7px;

    > .bubbles {
      display: flex;
      justify-content: center;
      margin: auto;
      max-width: 950px;
      > .bubble {
        position: relative;
        flex-basis: 50%;
        text-align: center;
        font-size: 13px;
        color: var(--black-800);
        margin: 16px;
        padding: 24px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        > h2 {
          font-weight: 300;
          line-height: 1.3;
          margin: 0 1.4rem;
          margin-bottom: 19px;
        }
        > img {
          width: 50px;
          margin-bottom: 11px;
        }
        ::after {
          clip-path: polygon(18px 0, 32px 0, 0 40px, 0 38px, 0 0, 18px 0);
          width: 32px;
          height: 32px;
          position: absolute;
          top: 99%;
          content: '';
          border-radius: 0 5px 0;
          display: block;
        }
      }
      > .left {
        background-color: var(--orange-100);
        border-bottom-left-radius: 7px;
        button {
          background-color: var(--orange-500);
          border: none;
          border-radius: 3px;
          padding: 12px 32px;
          color: var(--white);
          cursor: pointer;
          :hover {
            background-color: var(--orange);
          }
        }
        > div {
          margin-top: 12px;
          > a {
            color: var(--black-700);
            :hover {
              color: var(--orange-600);
            }
          }
        }
        ::after {
          background-color: #fee3cd;
          transform: scaleX(-1);
          right: 0;
          left: auto;
        }
      }
      > .right {
        background-color: var(--blue-100);
        border-bottom-right-radius: 7px;
        > .get-started {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 210px;
          margin: auto;
          margin-bottom: 12px;
          > .line {
            flex-basis: 33.3333333%;
            border-top: 1px solid var(--blue-300);
          }
          > .text {
            padding: 0 12px;
            font-size: 13px;
            flex-shrink: 0;
          }
        }
        > .button-container {
          display: flex;
          justify-content: center;
          margin: auto;
          button {
            display: flex;
            align-items: center;
            gap: 3px;
            background-color: var(--blue-500);
            border: none;
            border-radius: 3px;
            padding: 12px;
            color: var(--white);
            cursor: pointer;
            :nth-child(2) {
              margin-left: 8px;
            }
          }
        }
        ::after {
          background: var(--blue-100);
          left: 0;
        }
      }
    }
  }
`;
const MainPage = () => {
  return (
    <MainPageBox>
      <div className="home-container">
        <div className="bubbles">
          <div className="bubble left">
            <OrangeSpotSearch />
            <h2>
              Find the best answer to your technical question, help others
              answer theirs
            </h2>
            <Link to="/signup">
              <button>Join the community</button>
            </Link>
            <div>
              or <Link to="/questions">search content</Link>
            </div>
          </div>
          <div className="bubble right">
            <BlueSpotLock />
            <h2>Want a secure, private space for your technical knowledge?</h2>
            <div className="get-started">
              <span className="line"></span>
              <span className="text">Get started</span>
              <span className="line"></span>
            </div>

            <div className="button-container">
              <Link to="/login">
                <button>Log in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainPageBox>
  );
};

export default MainPage;
