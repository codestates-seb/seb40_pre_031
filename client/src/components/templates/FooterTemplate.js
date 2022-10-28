import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyleFooter = styled.div`
  width: 100vw;
  padding: 16px;
  background-color: #232629;
  color: #9199a1;

  > .footer-container {
    max-width: 1264px;
    box-sizing: border-box; //border-box
    display: flex;
    /* a {
      text-decoration: none;
      color: #9199a1;
      cursor: pointer;
    } */

    li,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    > .footer-logo {
      flex: 0 0 64px;
      margin: -12px 0 32px 0;
    }

    > .footer-nav {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;
      > .footer-column {
        padding: 12px 24px 0;
        flex: 1 0 auto;
        > h5 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 13px;
          color: #babfc4;
          > a {
            color: inherit;
          }
        }
        > ul {
          font-size: 13px;
          > li {
            margin: 0;
            padding: 4px 0;
          }
        }
      }
    }

    > .footer-copyright {
      display: flex;
      flex: 1 1 150px;
      flex-direction: column;
      box-sizing: border-box;
      font-size: 11px;
      vertical-align: baseline;
      > ul {
        display: flex;
        > li {
          padding: 4px 0;
          margin-left: 12px;
          font-size: 11px;
          line-height: calc(17 / 13);
          :first-child {
            margin-left: 0;
          }
        }
      }
      > p {
        margin-top: auto;
        margin-bottom: 24px;
        line-height: 1.4;
      }
    }
  }
`;


const FooterTemplate = () => {
    return (
      <StyleFooter>
        <div className="footer-container">
          <div className="footer-logo">
            {/* 로고아이콘 누르면 메인링크로 이동 */}
            <Link to="/main">로고 아이콘</Link>
          </div>

          <nav className="footer-nav">
            <div className="footer-column">
              <h5>
                <Link to="/main">STACK OVERFLOW</Link>
              </h5>
              <ul>
                <li>
                  {/* <Link to="질문">Questions</Link> */}
                  <Link to="/questions">Questions</Link>
                </li>
                <li>Help</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>PRODUCTS</h5>
              <ul>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Collectives</li>
                <li>Talent</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>COMPANY</h5>
              <ul>
                <li>About</li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
                <li>Cookie Settings</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>STACK EXCHANGE NETWORK</h5>
              <ul>
                <li>Technology</li>
                <li>Culture & recreation</li>
                <li>Life & arts</li>
                <li>Science</li>
                <li>Professional</li>
                <li>Business</li>
                <li>API</li>
                <li>Data</li>
              </ul>
            </div>
          </nav>
          <div className="footer-copyright">
            <ul>
              <li>
                <Link
                  to={{
                    pathname: 'https://stackoverflow.blog/',
                  }}
                  target="_blank"
                />
                Blog
              </li>
              {/* <li>Blog</li> */}
              <li>Facebook</li>
              {/* 'https://www.facebook.com/officialstackoverflow/' */}
              <li>Twitter</li>
              {/* 'https://twitter.com/stackoverflow' */}
              <li>LinkedIn</li>
              {/* 'https://www.linkedin.com/company/stack-overflow' */}
              <li>Instagram</li>
              {/* 'https://www.instagram.com/thestackoverflow/' */}
            </ul>
            <p>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under CC BY-SA. <span>rev 2022.8.31.42952</span>
            </p>
          </div>
        </div>
      </StyleFooter>
    );
};

export default FooterTemplate;