import {
  SignupLogincontainerBox,
  SignupRobotBox,
} from '../atoms/SignupContainer';
import {
  SignupinfoPassword,
  SignupinfoExplamation,
} from '../atoms/SignupInfoPassword.js';
import { Socialbutton } from '../atoms/SocialButton';
import { useEffect, useState, useRef } from 'react';
import { Input } from '../atoms/SignupInput';
import SignupRecaptcha from '../atoms/SignupRecaptcha';
import useInput from '../../hooks/useInput';
import { authApi } from '../../api/apis';
import { useNavigate } from 'react-router-dom';
const color = ['gray', 'black'];

// 회원가입 작성하는 곳
const Signinput = () => {
  //input의 value, 유효성 통과여부, input의 type, input과 label의 id
  const [name, nameBind] = useInput('', true, 'text', 'Display name');
  const [password, passwordBind] = useInput('', true, 'password', 'Password');
  const [email, emailBind] = useInput('', true, 'text', 'Email');
  const captchaRef = useRef(null);
  const [ischecked, setIschecked] = useState('no');
  const navigate = useNavigate();

  //Sign up 버튼 눌렀을시 작동
  const onClick = () => {
    let regex = new RegExp(
      '^.*(?=^.{8,20}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$'
    );
    regex.test(password)
      ? passwordBind.setPass(true)
      : passwordBind.setPass(false);

    regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{3,4}');
    regex.test(email) ? emailBind.setPass(true) : emailBind.setPass(false);

    if (ischecked === 'no') setIschecked(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name &&
      passwordBind.pass === true &&
      emailBind.pass === true &&
      ischecked
    ) {
      setIschecked('no');
      captchaRef.current.reset();
      //서버와통신
      authApi
        .postSignUp(name, email, password)
        .then((res) => {
          if (res.data.status === 409) {
            alert(res.data.message);
          } else {
            alert('회원가입을 성공했습니다.\n로그인 화면으로 이동합니다.');
            navigate('/login');
          }
        })
        .catch(() => alert('양식에맞게 작성해주세요.'));

      // 아이디 이메일 중복이면 처리해야함. -> useSelector와 useEffect활용해서 하면 될듯
    }
  };
  useEffect(() => {
    passwordBind.setPass(true);
    emailBind.setPass(true);
  }, [email, password]);

  return (
    <SignupLogincontainerBox height="610px" onSubmit={onSubmit}>
      <Input bind={nameBind}></Input>
      <Input bind={emailBind}></Input>
      {emailBind.pass ? null : (
        <SignupinfoExplamation>
          {email} is not a valid email address.
        </SignupinfoExplamation>
      )}

      <Input bind={passwordBind}></Input>
      <SignupinfoPassword
        margin="small"
        color={passwordBind.pass ? color[0] : 'var(--red-500)'}
      >
        Passwords must contain at least eight characters, including at least 1
        letter,1 special character and 1 number.
      </SignupinfoPassword>

      <SignupRobotBox ischecked={ischecked}>
        <SignupRecaptcha
          setIschecked={setIschecked}
          captchaRef={captchaRef}
        ></SignupRecaptcha>
      </SignupRobotBox>

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
