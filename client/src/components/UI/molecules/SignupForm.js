import { SignupcontainerBox, SignupRobotBox } from '../atoms/Signupcontainer';
import { Signupinputtext, Signupinputlabel } from '../atoms/Signupinput';
import { SignupinfoPassword } from '../atoms/SignupinfoPassword';
import { Socialbutton } from '../atoms/Socialbutton';

const data = ["Display name", "Email", "Password"];
const margin = ["4px 0 4px 0", "15px 0 15px 0", "30px 0 4px 0"];
const color = ["gray", "black"];

const SignupForm = () => {
    return (
        <SignupcontainerBox>
            {data.map(el =>
                <>
                    <Signupinputlabel htmlFor={el}>{el}</Signupinputlabel>
                    <Signupinputtext id={el}></Signupinputtext>
                </>
            )}
            <SignupinfoPassword margin = {margin[0]} color={color[0]}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</SignupinfoPassword>
            <SignupRobotBox></SignupRobotBox>
            <SignupinfoPassword margin = {margin[1]} color={color[1]}><input type="checkBox"></input>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
            </SignupinfoPassword>
            <Socialbutton size="245px" color="white">Sign up</Socialbutton>
            <SignupinfoPassword margin = {margin[2]} color={color[0]}>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</SignupinfoPassword>
        </SignupcontainerBox>
    )
}

export default SignupForm;