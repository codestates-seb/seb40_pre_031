import LoginForm from '../molecules/LoginForm';
import { LoginStackoverflow } from '../atoms/SvgComponents';
import { SignupinfoPassword } from '../atoms/SignupInfoPassword';
import Socials from '../molecules/Socials';
import styled from 'styled-components';

//소셜로그인과 로그인 정보 입력후 제출하는 곳

const LoginsubmitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .LoginStackoverflow {
    margin: 150px 0 20px 0;
  }
  a {
    text-decoration: none;
    color: blue;
  }
`;

const Loginsubmit = () => {
  return (
    <LoginsubmitBox>
      <LoginStackoverflow className="LoginStackoverflow" />
      <Socials />
      <LoginForm />
      <SignupinfoPassword margin="rightmedium">
        Don’t have an account? <a href=" ">Sign up</a>
      </SignupinfoPassword>
    </LoginsubmitBox>
  );
};

export default Loginsubmit;
