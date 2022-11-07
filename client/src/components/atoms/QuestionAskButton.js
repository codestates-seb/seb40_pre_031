import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const QuestionAskButton = () => {
  const navigate = useNavigate();
  const navigateToAsk = () => {
    isLogined && navigate('/questions/ask');
  };

  const isLogined = useSelector((store) => store.authReducer.userStatus);
  return (
    <>
      <AskQuestion onClick={navigateToAsk}>Ask Question</AskQuestion>
    </>
  );
};

export default QuestionAskButton;

const AskQuestion = styled.button`
  font-size: 12px;
  width: 100px;
  height: 38px;
  border-radius: 5px;
  background-color: var(--theme-button-primary-background-color);
  color: var(--theme-button-primary-color);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: 1px solid transparent; /*투명한 테두리 추가*/
  padding: 0.8em;
`;
