import Socials from '../molecules/Socials';
import Signinput from '../molecules/SignupForm';
import styled from 'styled-components';

//소셜회원가입과과 회원가입 정보 입력후 제출하는 곳

const SignupsubmitForm = styled.div`
  margin: 0 0 0 50px;
  @media screen and (max-width: 815px) {
    margin: 0 0 0 0;
  }
`;

const Signupsubmit = () => {
  return (
    <SignupsubmitForm>
      <Socials></Socials>
      <Signinput></Signinput>
    </SignupsubmitForm>
  );
};

export default Signupsubmit;
