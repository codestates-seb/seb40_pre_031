import styled from "styled-components";
import Signupinfo from "../UI/organism/Signupinfo";
import Signupsubmit from "../UI/organism/Signupsubmit";

const SignupPageForm = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const SignupPage = () =>{
    return(
        <SignupPageForm>
            <Signupinfo></Signupinfo>
            <Signupsubmit></Signupsubmit>
        </SignupPageForm>
    )
}

export default SignupPage;