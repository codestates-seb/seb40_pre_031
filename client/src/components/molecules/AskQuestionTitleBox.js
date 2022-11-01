import React, { forwardRef } from 'react';
import styled from 'styled-components';

// 질문 제목 부분을 묶는 div

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  h3 {
    font-size: 15px;
    color: var(--black-900);
  }
  p {
    font-size: 12px;
    color: var(--fc-medium);
  }
  input {
    width: 100%;
    padding: 7.8px 9.1px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
  }
  .titlecheck {
    position: absolute;
    bottom: -15px;
    color: var(--red);
  }
  .hide {
    display: none;
  }
`;

const AskQuestionTitleBox = forwardRef(({ onChange }, ref) => {
  const { title, p } = ref;
  return (
    <TitleBox>
      <h3>Title</h3>
      <p>Be specific and imagine you're asking a question to another person</p>
      <input
        type="text"
        placeholder="e,g is there an R function the index of an element in a vector?"
        ref={title}
        onChange={onChange}
      ></input>
      <p className="titlecheck hide" ref={p}>
        1자이상 35자 이하인 제목을 정확히 입력해 주세요
      </p>
    </TitleBox>
  );
});

export default AskQuestionTitleBox;
