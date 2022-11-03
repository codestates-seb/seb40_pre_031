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
<<<<<<< HEAD
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;
const SignupRobotBox = styled.div`
  weight: 268px;
  height: 160px;
  background-color: rgb(241 242 243);
  border-radius: 5px;
  padding: 10px 0 0 55px;
  border: ${({ ischecked }) => (ischecked ? null : 'solid 1px red')};
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
    margin: 0 0 15px 0;
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
