import {
  SignupLogincontainerBox,
  SignupRobotBox,
} from '../atoms/Signupcontainer';
import {
  SignupinfoPassword,
  SignupinfoExplamation,
} from '../atoms/SignupinfoPassword';
import { Socialbutton } from '../atoms/Socialbutton';
// 아래는 useState가 사용되었지만 불리지 않아 생기는 에러를 없애기 위한 주석입니다
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import { Input } from '../atoms/Signupinput';
import useInput from '../../hooks/useInput';

const color = ['gray', 'black'];

// 회원가입 작성하는 곳
const Signinput = () => {
  // 아래는 id 사용되었지만 불리지 않아 생기는 에러를 없애기 위한 주석입니다
  // eslint-disable-next-line no-unused-vars
  const [id, idBind] = useInput('', true, 'text', 'Display name');
  const [password, passwordBind] = useInput('', true, 'password', 'Password');
  const [email, emailBind] = useInput('', true, 'text', 'Email');

  //Sign up 버튼 눌렀을시 작동
  const onClick = () => {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    regex.test(password)
      ? passwordBind.setPass(true)
      : passwordBind.setPass(false);

    regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{3,4}');
    regex.test(email) ? emailBind.setPass(true) : emailBind.setPass(false);
  };

  useEffect(() => {
    passwordBind.setPass(true);
    emailBind.setPass(true);
  }, [email, password]);

  return (
    <SignupLogincontainerBox
      height="610px"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input bind={idBind}></Input>
      <Input bind={emailBind}></Input>
      {emailBind.pass ? null : (
        <SignupinfoExplamation>
          {email} is not a valid email address.
        </SignupinfoExplamation>
      )}

      <Input bind={passwordBind}></Input>
      <SignupinfoPassword
        margin="small"
        color={passwordBind.pass ? color[0] : 'rgb(229 62 66)'}
      >
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </SignupinfoPassword>

      <SignupRobotBox />

      <SignupinfoPassword margin="medium" color={color[1]}>
        <input type="checkBox"></input>Opt-in to receive occasional product
        updates, user research invitations, company announcements, and digests.
      </SignupinfoPassword>

      <Socialbutton size="245px" color="white" onClick={onClick}>
        Sign up
      </Socialbutton>
      <SignupinfoPassword margin="large" color={color[0]}>
        By clicking “Sign up”, you agree to our terms of service, privacy policy
        and cookie policy
      </SignupinfoPassword>
    </SignupLogincontainerBox>
  );
};

export default Signinput;
