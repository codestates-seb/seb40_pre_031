import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostQuestionButton from '../atoms/PostQuestionButton';
import AskQuestionEditorBox from '../molecules/AskQuestionEditorBox';
import AskQuestionHeader from '../molecules/AskQuestionHeader';
import AskQuestionTagBox from '../molecules/AskQuestionTagBox';
import AskQuestionTitleBox from '../molecules/AskQuestionTitleBox';
import { questionApi } from '../../api/apis';
import { useSelector } from 'react-redux';

const Container = styled.div`
  background: var(--black-050);
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

// question foam div 로 질문 작성 내용 묶기
const Questionfoam = styled.div`
  background: var(--white);
  border: 1px solid var(--black-200);
  border-radius: 4px;
  box-shadow: 5px 5px 5px 0px var(--black-100);
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  padding: 16px;
  width: 1000px;
`;

function AskQuestion() {
  const titleRef = { title: useRef(null), p: useRef(null) };
  const editorRef = useRef(null);
  const tagRef = useRef(null);
  const navigate = useNavigate(); // 질문 등록 후 질문 리스트 페이지 연결  app.js 라우터 연결후 사용
  const user = useSelector((state) => state.authReducer.userId);

  const editorOnChange = () => {
    const value = editorRef.current.getInstance().getMarkdown();
    console.log(value);
  };

  const titleOnChange = () => {
    const value = titleRef.title.current.value;
    console.log(value.length);
    if (value.length >= 35 || value.length < 1) {
      titleRef.p.current.classList.remove('hide');
      return;
    } else if (value.length < 36) {
      titleRef.p.current.classList.add('hide');
    }
  };

  const buttonOnClick = () => {
    const data = {
      userid: user,
      title: titleRef.title.current.value,
      content: editorRef.current.getInstance().getMarkdown(),
    };
    if (data.title === '' || data.title.length >= 35) {
      alert('1자이상 35자 이하인 제목을 정확히 입력해 주세요 ');
      titleRef.title.current.focus();
      return;
    }
    console.log(data);
    questionApi
      .postQuestion(data.userid, data.title, data.content)
      .then((res) => {
        console.log(res);
        navigate('/questions');
        location.reload();
      });
  };

  return (
    <Container>
      <AskQuestionHeader />
      <Questionfoam>
        <AskQuestionTitleBox ref={titleRef} onChange={titleOnChange} />
        <AskQuestionEditorBox ref={editorRef} onChange={editorOnChange} />
        <AskQuestionTagBox ref={tagRef} />
      </Questionfoam>
      <PostQuestionButton onClick={buttonOnClick} />
    </Container>
  );
}

export default AskQuestion;
