import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from '../../assets/footer-logo.svg';

const FooterBox = styled.div`
  width: 100vw;
  padding: 16px;
  background-color: #232629; //--black-800: hsl(210,8%,15%);
  color: #9199a1; // --black-550: hsl(210,8%,60%)

  > .footer-container {
    max-width: 1264px;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    padding: 32px 12px 12px 12px;

    a {
      text-decoration: none;
      color: #9199a1; // --black-550: hsl(210,8%,60%)
      cursor: pointer;
    }

    li,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    > .footer-logo {
      flex: 0 0 64px;
      margin: 12px 0 32px 0;
    }

    > .footer-nav {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;

      > .footer-column {
        padding: 0 12px 24px 0;
        flex: 1 0 auto;
        > h5 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 13px;
          color: #babfc4; //    --black-200: hsl(210,8%,75%);
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
      font-size: 12px;
      vertical-align: baseline;
      padding: 12px;

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
        margin-bottom: 20px;
        line-height: 1.4;

      }

    }
  }
`;

const FooterTemplate = () => {
    return (
      <FooterBox>
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/main">
              <FooterLogo />
            </Link>
          </div>

          <nav className="footer-nav">
            <div className="footer-column">
              <h5>
                <br/>
                <Link to="/main">STACK OVERFLOW</Link>
              </h5>
              <ul>
                <li>
                  <Link to="/questions">Questions</Link>
                </li>
                <a href="https://stackoverflow.com/help">
                  <li>Help</li>
                </a>
              </ul>
            </div>
            <div className="footer-column">
              <a href="https://stackoverflow.co/">
                <h5>PRODUCTS</h5>
              </a>
              <ul>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Collectives</li>
                <li>Talent</li>
              </ul>
            </div>
            <div className="footer-column">
              <a href="https://stackoverflow.co/">
                <h5>COMPANY</h5>
              </a>
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
              <a href="https://stackexchange.com/">
                <h5>STACK EXCHANGE NETWORK</h5>
              </a>
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
                <a href="https://stackoverflow.blog/">Blog</a>
              </li>
              <li>
                <a href="https://www.facebook.com/officialstackoverflow/">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/stackoverflow">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/stack-overflow">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thestackoverflow/">
                  Instagram
                </a>
              </li>
            </ul>
            <p>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under{' '}
              <span>
                <a href="https://stackoverflow.com/help/licensing">
                  CC BY-SA.{' '}
                </a>
              </span>
              <span>rev 2022.10.28.42999</span>
            </p>
          </div>
        </div>
      </FooterBox>
    );
};

export default FooterTemplate;