import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const QuestionAskButton = () => {
  const navigate = useNavigate();
  const navigateToAsk = () => {
    navigate('/questionask');
  };
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
