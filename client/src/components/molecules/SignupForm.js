import { SignupcontainerBox, SignupRobotBox, SignupinputBox } from '../atoms/Signupcontainer';
import { Signupinputtext, Signupinputlabel } from '../atoms/Signupinput';
import { SignupinfoPassword, SignupinfoExplamation } from '../atoms/SignupinfoPassword';
import { Socialbutton } from '../atoms/Socialbutton';
import { SignupExclamation } from '../atoms/SvgComponents';
import { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';

const margin = ["4px 0 4px 0", "15px 0 15px 0", "30px 0 4px 0"];
const color = ["gray", "black"];



const Input = ({ id, bind }) => {
    return (
        <>
            <Signupinputlabel htmlFor={id}>{id}</Signupinputlabel>
            <SignupinputBox>
                <Signupinputtext {...bind} id={id}></Signupinputtext>
                {bind.pass ? null : <SignupExclamation className="Exclamation"></SignupExclamation>}
            </SignupinputBox>
        </>
    )

}

const Signinput = () => {

    const [id, idBind] = useInput("", true, "text");
    const [password, passwordBind] = useInput("", true, "password");
    const [email, emailBind] = useInput("", true, "text");

    //Sign up 버튼 눌렀을시 작동
    const onClick = () => {

        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(regex.test(password)){passwordBind.setPass(true)}  
        else { passwordBind.setPass(false)}

        regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{3,4}');
        if(regex.test(email)){  emailBind.setPass(true)} 
        else { emailBind.setPass(false)};
    }
    useEffect(() => {
        passwordBind.setPass(true);
        emailBind.setPass(true);
    }, [email, password])

    return (
        <SignupcontainerBox onSubmit={(e) => e.preventDefault()}>

            <Input id="Display name" bind={idBind}></Input>
            <Input id="Email"  bind={emailBind} ></Input>
            {emailBind.pass ? null : <SignupinfoExplamation>{email} is not a valid email address.</SignupinfoExplamation>}

            <Input id="Password"  bind={passwordBind}></Input>
            <SignupinfoPassword margin={margin[0]} color={passwordBind.pass ? color[0] : "rgb(229 62 66)"}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</SignupinfoPassword>

            <SignupRobotBox />

            <SignupinfoPassword margin={margin[1]} color={color[1]}><input type="checkBox"></input>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
            </SignupinfoPassword>

            <Socialbutton size="245px" color="white" onClick={onClick}>Sign up</Socialbutton>
            <SignupinfoPassword margin={margin[2]} color={color[0]}>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</SignupinfoPassword>
        </SignupcontainerBox>
    )
}

export default Signinput;