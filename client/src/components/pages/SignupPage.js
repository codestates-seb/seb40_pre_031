import styled from 'styled-components';
import Signupinfo from '../organism/Signupinfo';
import Signupsubmit from '../organism/Signupsubmit';

//회원가입 페이지

const SignupPageForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 815px) {
    flex-direction: column;
  }
`;

const SignupPage = () => {
  return (
    <SignupPageForm>
      <Signupinfo></Signupinfo>
      <Signupsubmit></Signupsubmit>
    </SignupPageForm>
  );
};

export default SignupPage;
