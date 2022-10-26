import Socials from "../molecules/Socials";
import Signinput from "../molecules/SignupForm";
import styled from "styled-components";

const SignupsubmitForm = styled.div`
    margin : 0 0 0 50px;
`

const Signupsubmit = () => {
    return (
        <SignupsubmitForm>
            <Socials></Socials>
            <Signinput></Signinput>
        </SignupsubmitForm>
    )
}

export default Signupsubmit;