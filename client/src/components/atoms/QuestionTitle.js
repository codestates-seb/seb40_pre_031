import styled from 'styled-components';

const Title = styled.a`
  color: var(--theme-post-title-color);
`;

const QuestionTitle = () => {
  return (
    <Title>
      Angular 10: PrimeNG p-calendar dates get erased on Tab key press
    </Title>
  );
};

export default QuestionTitle;
