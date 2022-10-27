import { SignupcontainerBox, SignupRobotBox } from '../atoms/Signupcontainer';
import { Signupinputtext, Signupinputlabel } from '../atoms/Signupinput';
import { SignupinfoPassword } from '../atoms/SignupinfoPassword';
import { Socialbutton } from '../atoms/Socialbutton';
import useInput from '../../../hooks/useInput';

const margin = ["4px 0 4px 0", "15px 0 15px 0", "30px 0 4px 0"];
const color = ["gray", "black"];

const Input = ({ id, type, bind }) => {
    return (
        <>
            <Signupinputlabel htmlFor={id}>{id}</Signupinputlabel>
            <Signupinputtext {...bind} id={id} type={type}></Signupinputtext>
        </>
    )

}

const Signinput = () => {

    const [id, idBind] = useInput("");
    const [password, passwordBind] = useInput("");
    const [email, emailBind] = useInput("");

    return (
        <SignupcontainerBox>

            <Input id="Display name" type="text" bind= {idBind}></Input>
            <Input id="Email" type="text" bind= {emailBind}></Input>
            <Input id="Password" type="password" bind= {passwordBind}></Input>

            <SignupinfoPassword margin={margin[0]} color={color[0]}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</SignupinfoPassword>
            <SignupRobotBox>
            </SignupRobotBox>
            <SignupinfoPassword margin={margin[1]} color={color[1]}><input type="checkBox"></input>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
            </SignupinfoPassword>
            <Socialbutton size="245px" color="white">Sign up</Socialbutton>
            <SignupinfoPassword margin={margin[2]} color={color[0]}>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</SignupinfoPassword>
        </SignupcontainerBox>
    )
}

export default Signinput;