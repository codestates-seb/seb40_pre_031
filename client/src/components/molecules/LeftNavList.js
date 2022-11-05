import styled from 'styled-components';
import LeftNavHead from '../atoms/LeftNavHead';
import LeftNavItem from '../atoms/LeftNavItem';
import LeftNavButton from '../atoms/LeftNavButton';
import { IconGlobe, IconStarVerified } from '../atoms/SvgComponents';
import { ReactComponent as Teampromo } from '../../assets/icon/sidebar-promo.svg';

// List ul 을 이용해 전체 리스트 묶기
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  padding-top: 29px;
  font-size: 13px;
  background: var(--white);
  border: 1px solid var(--black-075);
  border-top: none;
`;

// Item li 를 이용해 Navlink인 Leftnavitem와 Icon을 함께 묶기
const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 33px;
  position: relative;
`;

// Icon 아이콘들의 정확한 위치 조정을 위해 사용
const Icon = styled.div`
  position: absolute;
  left: 8px;
  bottom: 5px;
`;

// 사이드바 가장 아래 위치한 팀 프로모 부분 전체 틀 잡기
const Promo = styled.li`
  box-sizing: border-box;
  width: 164px;
  height: 290.75px;
  padding: 12px 12px 6px 12px;
  border: 1px solid var(--black-075);
  div {
    color: var(--black-750);
    font-size: 13px;
  }
`;

// Promo 아이콘 패딩값을 주기위해 사용
const Promoicon = styled.div`
  padding: 8px 0px 8px 0px;
`;

function Leftnavlist() {
  return (
    <List>
      <Item>
        <LeftNavItem padding={'4px 4px 4px 8px'} link={'/'} name={'Home'} />
      </Item>
      <LeftNavHead name={'PUBLIC'} />
      <Item>
        <Icon>
          <IconGlobe />
        </Icon>
        <LeftNavItem link={'/questions'} name={'Questions'} />
      </Item>
      <Item>
        <LeftNavItem link={'/tags'} name={'Tags'} />
      </Item>
      <Item>
        <LeftNavItem link={'/users'} name={'Users'} />
      </Item>
      <Item>
        <LeftNavItem link={'/companies'} name={'Companies'} />
      </Item>

      <LeftNavHead name={'COLLECTIVES'} />
      <Item>
        <Icon>
          <IconStarVerified fill={'var(--orange)'} />
        </Icon>
        <LeftNavItem link={'/collectives'} name={'Explore Collectives'} />
      </Item>
      <LeftNavHead name={'TEAMS'} />
      <Promo>
        <div>
          <b>Stack OverFlow for team</b>- Start collaborating and sharing
          organizational knowledge.
        </div>
        <Promoicon>
          <Teampromo />
        </Promoicon>
        <LeftNavButton
          name={'Create a free team'}
          link={
            'https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta'
          }
        />
        <LeftNavButton
          name={'Why Teams?'}
          color={'var(--black-500)'}
          bgcolor={'var(--white)'}
          link={'https://stackoverflow.co/teams/'}
        />
      </Promo>
    </List>
  );
}

export default Leftnavlist;
