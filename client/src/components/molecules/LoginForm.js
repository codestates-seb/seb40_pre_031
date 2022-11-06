import { SignupLogincontainerBox } from '../atoms/SignupContainer.js';
import { Input } from '../atoms/SignupInput';
import useInput from '../../hooks/useInput.js';
import { Socialbutton } from '../atoms/SocialButton.js';
import { SignupinfoPassword } from '../atoms/SignupInfoPassword.js';
import { useEffect } from 'react';
import { authApi } from '../../api/apis.js';
import { loginAction } from '../../actions';
import { useDispatch } from 'react-redux';

//로그인 정보 작성하는곳
const LoginForm = () => {
  const [email, bindEmail] = useInput('', true, 'text', 'Email');
  const [password, bindPassword] = useInput('', true, 'password', 'Password');
  const dispatch = useDispatch();

  const onClick = () => {
    password !== '' ? bindPassword.setPass(true) : bindPassword.setPass(false);

    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{3,4}');
    regex.test(email) ? bindEmail.setPass(true) : bindEmail.setPass(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //서버에 로그인요청
    authApi
      .getLogin(email, password)
      .then((res) => dispatch(loginAction(res.data)))
      .catch(() => alert('Email과 비밀번호를 확인해주세요'));
  };

  useEffect(() => {
    bindEmail.setPass(true);
    bindPassword.setPass(true);
  }, [email, password]);

  return (
    <SignupLogincontainerBox height="210px" onSubmit={onSubmit}>
      <Input bind={bindEmail}></Input>
      {bindEmail.pass ? null : (
        <SignupinfoPassword margin={'small'} color="var(--red-500)">
          The email is not a valid email address.
        </SignupinfoPassword>
      )}
      <Input bind={bindPassword}></Input>
      {bindPassword.pass ? null : (
        <SignupinfoPassword margin={'small'} color="var(--red-500)">
          Password cannot be empty.
        </SignupinfoPassword>
      )}
      <Socialbutton size="245px" color="white" onClick={onClick}>
        Log in
      </Socialbutton>
    </SignupLogincontainerBox>
  );
};

export default LoginForm;
