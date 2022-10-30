import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from '../../assets/footer-logo.svg';

const FooterBox = styled.div`
  width: 100vw;
  padding: 16px;
  background-color: var(--black-800);
  color: var(--theme-footer-link-color); 
`;

const FooterContainer = styled.div `
    max-width: 1264px;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    padding: 32px 12px 12px 12px;
`

const FooterLink = styled.a`
      text-decoration: none;
      color: var(--theme-footer-link-color);
      cursor: pointer;
`;

const List = styled.ul`
      list-style: none;
      margin: 0;
      padding: 0;
`
const Item = styled.li`
      list-style: none;
      margin: 0;
      padding: 0;
`

const ImgContainer = styled.div`
  flex: 0 0 64px;
  margin: -12px 32px 0;
`;
const FooterNav = styled.div`
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;
`

const FooterColumn = styled.div`
      padding: 0 12px 24px 0;
      flex: 1 0 auto;

  h5{
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 13px;
    color: #babfc4; //    --black-200: hsl(210,8%,75%);
    
    a{
      color: inherit;
    }
  }
`
    
const LinkList = styled.ul`
    font-size: 13px;
  li{
         margin: 0;
         padding: 4px 0;
  }
`

const FooterCopyright = styled.div`
  display: flex;
  flex: 1 1 150px;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 12px;
  vertical-align: baseline;
  padding: 12px;

  ul {
    display: flex;

    li {
      padding: 4px 0;
      margin-left: 12px;
      font-size: 11px;
      line-height: calc(17 / 13);
      :first-child {
        margin-left: 0;
      }
    }
  }

  p {
    margin-top: auto;

    margin-bottom: 20px;
    line-height: 1.4;
  }
`;

const LastLink = styled.span`
  text-decoration: underline;
`;




const FooterTemplate = () => {
    return (
      <FooterBox>
        <FooterContainer>
          <ImgContainer>
            <Link to="/main">
              <FooterLogo />
            </Link>
          </ImgContainer>

          <FooterNav>
            <FooterColumn>
              <h5>
                <Link to="/main">STACK OVERFLOW</Link>
              </h5>
              <List>
                <Item>
                  <Link to="/questions">Questions</Link>
                </Item>
                <FooterLink href="https://stackoverflow.com/help">
                  <Item>Help</Item>
                </FooterLink>
              </List>
            </FooterColumn>

            <FooterColumn>
              <FooterLink href="https://stackoverflow.co/">
                <h5>PRODUCTS</h5>
              </FooterLink>
              <LinkList>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Collectives</li>
                <li>Talent</li>
              </LinkList>
            </FooterColumn>

            <FooterColumn>
              <FooterLink href="https://stackoverflow.co/">
                <h5>COMPANY</h5>
              </FooterLink>
              <LinkList>
                <li>About</li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
                <li>Cookie Settings</li>
                <li>Cookie Policy</li>
              </LinkList>
            </FooterColumn>

            <FooterColumn>
              <FooterLink href="https://stackexchange.com/">
                <h5>STACK EXCHANGE NETWORK</h5>
              </FooterLink>
              <LinkList>
                <li>Technology</li>
                <li>Culture & recreation</li>
                <li>Life & arts</li>
                <li>Science</li>
                <li>Professional</li>
                <li>Business</li>
                <li>API</li>
                <li>Data</li>
              </LinkList>
            </FooterColumn>
          </FooterNav>
          <FooterCopyright>
            <LinkList>
              <li>
                <FooterLink href="https://stackoverflow.blog/">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="https://www.facebook.com/officialstackoverflow/">
                  Facebook
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://twitter.com/stackoverflow">
                  Twitter
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://www.linkedin.com/company/stack-overflow">
                  LinkedIn
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://www.instagram.com/thestackoverflow/">
                  Instagram
                </FooterLink>
              </li>
            </LinkList>
            <p>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under{' '}
              <span>
                <LastLink href="https://stackoverflow.com/help/licensing">
                  CC BY-SA.{' '}
                </LastLink>
              </span>
              <span>rev 2022.10.28.42999</span>
            </p>
          </FooterCopyright>
        </FooterContainer>
      </FooterBox>
    );
};

export default FooterTemplate;