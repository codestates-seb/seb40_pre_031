import { useState } from 'react';
import styled from 'styled-components';
import { IconClear, IconPencil, IconCheck } from './SvgComponents';
// import { commentApi } from '../../api/apis';

const Commentitem = styled.li`
  width: 641px;
  height: 100%;
  padding: 6px;
  font-size: 13px;
  display: flex;
  gap: 5px;
  border-bottom: 1px solid var(--black-075);
  span {
    margin-right: 5px;
    input {
      width: 100%;
    }
  }
  div {
    display: inline-flex;
    span {
      color: var(--blue);
    }
  }
  .time {
    color: var(--black-350);
  }
  .icon {
    display: flex;
  }
  .edit {
    :hover {
      fill: var(--blue);
    }
  }
  .delete {
    :hover {
      fill: var(--red);
    }
  }
`;

function Comment({ content, id, time }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');
  const displayName = 'aukyu';
  const canEdit = displayName === id;
  const editOnClick = () => {
    console.log('edit');
    setEdit(!edit);
  };
  const deleteOnClick = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      console.log('delete');
    }
  };
  const putOnClick = () => {
    if (window.confirm('수정하시겠습니까?')) {
      console.log(text);
      setEdit(!edit);
    }
  };
  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <Commentitem>
      <span>
        {!edit && <span>{content}</span>}
        {edit && <input defaultValue={content} onChange={onChange}></input>}
        <div>
          - <span>&nbsp;{id}</span>
        </div>
        <span className="time">{time}</span>
      </span>
      {canEdit && (
        <div className="icon">
          {edit && (
            <IconCheck fill={'var(--green)'} onClick={putOnClick}></IconCheck>
          )}
          <IconPencil
            fill={'var(--black-075)'}
            className="edit"
            onClick={editOnClick}
          ></IconPencil>
          <IconClear
            fill={'var(--black-075)'}
            className="delete"
            onClick={deleteOnClick}
          ></IconClear>
        </div>
      )}
    </Commentitem>
  );
}

export default Comment;
