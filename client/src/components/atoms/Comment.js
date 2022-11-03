import styled from 'styled-components';

const Commentitem = styled.div`
  width: 641px;
  height: 32px;
  padding: 6px;
  font-size: 13px;
  display: flex;
  gap: 5px;
  div {
    span {
      color: var(--blue);
    }
  }
  .time {
    color: var(--black-350);
  }
`;

function Comment() {
  return (
    <Commentitem>
      <span>what is error/question her?</span>
      <div>
        - <span>userName</span>
      </div>
      <span className="time">Time</span>
    </Commentitem>
  );
}

export default Comment;
