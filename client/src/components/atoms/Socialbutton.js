import styled from 'styled-components';

//소셜로그인 버튼
//Login 버튼과 Sign up버튼에도 재활용 했습니다.
const Socialbutton = styled.button`
  width: ${({ size }) => size};
  box-sizing: content-box;
  height: 15px;
  padding: 0.8em;
  margin: 4px 0 4px 0px;
  border: 1px solid rgb(215 218 224);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ name }) =>
    name === 'Google'
      ? 'var(--white)'
      : name === 'Naver'
      ? '#03C75A'
      : name === 'GitHub'
      ? 'var(--black-750)'
      : 'var(--theme-button-primary-background-color)'};
  color: ${({ color }) => color};

  &:hover {
    background: ${({ name }) =>
      name === 'Google'
        ? 'var(--black-50)'
        : name === 'Naver'
        ? '#00B700'
        : name === 'GitHub'
        ? 'var(--black-900)'
        : 'var(--blue-700)'};
  }

  .Socialsvg {
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
  }
`;

export { Socialbutton };
