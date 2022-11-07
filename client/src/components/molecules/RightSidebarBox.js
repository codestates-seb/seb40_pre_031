import styled from 'styled-components';
import { ReactComponent as GoogleCloud } from '../../assets/icon/GoogleCloud.svg';
import { ReactComponent as Intel } from '../../assets/icon/Intel.svg';
import { ReactComponent as Twilio } from '../../assets/icon/Twilio.svg';
import RightSidebarBtn from '../atoms/RightSidebarBtn';

//오른쪽 사이드바 두번째 박스 구현
const RightSidebarBox = () => {
  const SidebarJoinBox = styled.div`
    width: 300px;
    background-color: var(--white);
    margin: 0 0 0 1.5rem;
    border: 1px solid var(--black-100);
    padding-left: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
    border-radius: 3px;
    border-top: 1px solid var(--black-100);
    padding: 16px 15px;
  `;

  const BoxHeader = styled.div`
    display: flex;
    flex: 1 auto;
  `;

  const TittleBox = styled.div`
    margin-right: 80px;
    padding: 0 10px;
    > h1 {
      font-size: 10px;
    }
    > p {
      font-size: 10px;
    }
  `;

  const BodyText = styled.span`
    user-select: text;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

  return (
    <>
      {/* 박스1 Google */}
      <SidebarJoinBox>
        <div>
          <BoxHeader>
            <div>
              <GoogleCloud />
            </div>
            <TittleBox>
              <h1>Google Cloud</h1>
              <p>31k Members</p>
            </TittleBox>
            <div>
              <RightSidebarBtn />
            </div>
          </BoxHeader>
          <BodyText>
            Google Cloud provides organizations with leading infrastructure,
            platform capabilities and industry solutions to help them solve
            their most critical business problems.
          </BodyText>
        </div>
      </SidebarJoinBox>

      {/* 박스2 Intel */}
      <SidebarJoinBox>
        <div>
          <BoxHeader>
            <div>
              <Intel />
            </div>
            <TittleBox>
              <h1>Intel</h1>
              <p>8k Members</p>
            </TittleBox>
            <div>
              <RightSidebarBtn />
            </div>
          </BoxHeader>
          <BodyText>
            A space for developers to collaborate on Intel software tools,
            libraries, and resources. Share knowledge and connect with Intel
            product experts. Find the information you need to drive innovation
            and simplify development from edge to cloud with Intel.
          </BodyText>
        </div>
      </SidebarJoinBox>

      {/* 박스3 Twilio */}
      <SidebarJoinBox>
        <div>
          <BoxHeader>
            <div>
              <Twilio size="32px" height="32px" />
            </div>
            <TittleBox>
              <h1>Google Cloud</h1>
              <p>31k Members</p>
            </TittleBox>
            <div>
              <RightSidebarBtn />
            </div>
          </BoxHeader>
          <BodyText>
            Twilio has democratized channels like voice, text, chat, video, and
            email by virtualizing the world’s communications infrastructure
            through APIs that are simple enough for any developer, yet robust
            enough to power the world’s most demanding applications.
          </BodyText>
        </div>
      </SidebarJoinBox>
    </>
  );
};

export default RightSidebarBox;
