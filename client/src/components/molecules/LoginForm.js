import { SignupLogincontainerBox } from '../atoms/Signupcontainer.js';
import { Input } from '../atoms/Signupinput';
import useInput from '../../hooks/useInput.js';
import { Socialbutton } from '../atoms/Socialbutton.js';
import { SignupinfoPassword } from '../atoms/SignupinfoPassword.js';
import { useEffect } from 'react';

//로그인 정보 작성하는곳
const LoginForm = () => {
    const [email, bindEmail] = useInput("", true, "text", "Email")
    const [password, bindPassword] = useInput("", true, "password", "Password")

    const onClick = () => {
        password !== "" ? bindPassword.setPass(true) : bindPassword.setPass(false);

        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{3,4}');
        regex.test(email) ? bindEmail.setPass(true) : bindEmail.setPass(false);
    }
   
    useEffect(() => {
        bindEmail.setPass(true);
        bindPassword.setPass(true);
    }, [email, password])

    return (
        <SignupLogincontainerBox height="210px" onSubmit={(e) => e.preventDefault()} >
            <Input bind={bindEmail}></Input>
            {bindEmail.pass ? null : <SignupinfoPassword margin ={"small"} color="var(--red-500)"> The email is not a valid email address.</SignupinfoPassword> }
            <Input bind={bindPassword}></Input>
            {bindPassword.pass ? null : <SignupinfoPassword margin ={"small"} color="var(--red-500)"> Password cannot be empty.</SignupinfoPassword> }
            <Socialbutton size="245px" color="white" onClick={onClick} >Log in</Socialbutton>
        </SignupLogincontainerBox>
    )
}

export default LoginForm;