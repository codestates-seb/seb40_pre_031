import styled from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { BsChatRight } from 'react-icons/bs';
import { FaStackOverflow } from 'react-icons/fa';

//오른쪽 노란색 sidebar A

//제목
const YellowSidebarBox = styled.div`
  width: 300px;
  list-style: none;
  background-color: #fdf7e2;
  margin: 1.9rem 0 0 1.5rem;
  border: 1px solid hsl(47, 65%, 84%);
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
  border-radius: 3px;
`;

//내용
const TittleHeader = styled.li`
  background-color: #fbf3d5;
  border-top: 1px solid hsl(47, 65%, 84%);
  border-bottom: 1px solid hsl(47, 65%, 84%);
  color: #525960;
  font-size: 12px;
  font-weight: 700;
  padding: 12px 15px;
`;

const TittleItem = styled.li`
  margin: 12px 0;
  padding: 0 16px;
`;

const TextBox = styled.div`
  background-color: #fdf7e2;
  color: #232629;
  font-size: 13px;
  margin: 12px 0px;
  padding: 0px 0px;
`;

const RightSidebarA = () => {
  return (
    <YellowSidebarBox>
      {/* The OverFlow Blog */}
      <ul>
        <TittleHeader>The Overflow Blog</TittleHeader>
        <TittleItem>
          <TextBox>
            <HiPencil />{' '}
            <a href="https://stackoverflow.blog/">
              Flutter vs. React Native: Which is the right cross-platform
              framework for you?
            </a>
          </TextBox>
        </TittleItem>
        <TittleItem>
          <TextBox>
            <HiPencil />{' '}
            <a href="https://stackoverflow.blog/">
              DIY mad science…it’s all about homelabbing{' '}
            </a>
          </TextBox>
        </TittleItem>
      </ul>
      {/* Featured on Meta */}
      <TittleHeader>Featured on Meta</TittleHeader>
      <TittleItem>
        <TextBox>
          <BsChatRight style={{ color: '#53A7D9' }} />{' '}
          <a href="https://meta.stackexchange.com/questions/">
            The 2022 Community-p-thon has begun!
          </a>
        </TextBox>
      </TittleItem>

      <TittleItem>
        <TextBox>
          <BsChatRight style={{ color: '#53A7D9' }} />{' '}
          <a href="https://meta.stackexchange.com/questions/">
            Mobile app infrastructure being decommissioned
          </a>
        </TextBox>
      </TittleItem>

      <TittleItem>
        <TextBox>
          <FaStackOverflow />{' '}
          <a href="https://meta.stackoverflow.com/questions/421038/">
            The Ask Wizard (2022) has graduated
          </a>
        </TextBox>
      </TittleItem>

      <TittleItem>
        <TextBox>
          <FaStackOverflow />{' '}
          <a href="https://meta.stackoverflow.com/questions/420897">
            Staging Ground Workflow: Canned Comments
          </a>
        </TextBox>
      </TittleItem>

      <TittleItem>
        <TextBox>
          <FaStackOverflow />{' '}
          <a href="https://meta.stackoverflow.com/questions/420897/">
            2022 Moderator Election Q&A - Question Collection
          </a>
        </TextBox>
      </TittleItem>
    </YellowSidebarBox>
  );
};

export default RightSidebarA;
