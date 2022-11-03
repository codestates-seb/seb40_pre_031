import styled from 'styled-components';

//로그인페이지와 회원가입에 쓰는 div, form 모음
const SignupLogincontainerBox = styled.form`
  box-sizing: content-box;
  width: 268px;
  height: ${({ height }) => height};
  padding: 24px;
  margin: 20px 0 24px 0;
  border-radius: 5px;
  background-color: white;
`;
const SignupRobotBox = styled.div`
  width: 268px;
  height: 160px;
  background-color: rgb(241 242 243);
`;
const SignupinfoBox = styled.div`
  width: 410px;
  height: 285px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  @media screen and (max-width: 815px) {
    display: none;
  }
  h2 {
    font-weight: 500;
  }
`;
const SignupsubinfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 411px;
  height: 24px;
  margin: 10px 0 10px 0;
  .Signupsvg {
    margin: 0 10px 0 0;
  }
`;
const SignupResponsiveBox = styled.div`
  width: 360px;
  display: none;
  @media screen and (max-width: 815px) {
    display: block;
    margin: 40px 0 40px 0;
  }
  text-align: center;
  h3 {
    font-weight: 500;
  }
`;

const SignupinputBox = styled.div`
  width: 270px;
  height: 31px;
  border: none;
  margin: 0 0 10px 0;

  .Exclamation {
    position: relative;
    bottom: 25px;
    left: 240px;
  }
`;

export {
  SignupLogincontainerBox,
  SignupRobotBox,
  SignupinfoBox,
  SignupsubinfoBox,
  SignupResponsiveBox,
  SignupinputBox,
};
