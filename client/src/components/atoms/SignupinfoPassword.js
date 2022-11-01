import styled from 'styled-components';

//유효성 검사시 나타나는 메세지
const SignupinfoPassword = styled.p`
  width: 268px;
  margin: ${({ margin, theme }) => theme.margin[margin]};
  font-size: 12px;
  font-weight: 500;
  color: ${({ color }) => color};
`;
const SignupinfoExplamation = styled.p`
  width: 268px;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: rgb(229 62 66);
`;
export { SignupinfoPassword, SignupinfoExplamation };
