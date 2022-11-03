import styled from 'styled-components';

const Commentitem = styled.div`
  width: 641px;
  height: 32px;
  padding: 6px;
  font-size: 13px;
  display: flex;
  gap: 5px;
  border-bottom: 1px solid var(--black-075);
  div {
    span {
      color: var(--blue);
    }
  }
  .time {
    color: var(--black-350);
  }
`;

function Comment({ content, id, time }) {
  return (
    <Commentitem>
      <span>{content}</span>
      <div>
        - <span>{id}</span>
      </div>
      <span className="time">{time}</span>
    </Commentitem>
  );
}

export default Comment;
