import styled from 'styled-components';
import { SignupinfoBox, SignupsubinfoBox,SignupResponsiveBox } from '../atoms/Signupcontainer';
import { SignupUpandDown, Signupquestion, Signuptag, Signuptrophy } from '../atoms/SvgComponents';

const data = [
    {
        content: "Get unstuck — ask a question",
        svg: Signupquestion
    },
    {
        content: "Unlock new privileges like voting and commenting",
        svg: SignupUpandDown

    },
    {
        content: "Save your favorite tags, filters, and jobs",
        svg: Signuptag
    },
    {
        content: "Earn reputation and badges",
        svg: Signuptrophy
    },
]

const Signuplabel = styled.label`
    width : 410px;
    height : 34px;
    font-size : 12px;
    color : gray;
    margin : 10px 0 0 0;
    background-color : transparent;
   

`

const Signupinfo = () => {
    

    return (
        <>
        <SignupinfoBox>
            <h2>Join the Stack Overflow community</h2>
            {data.map((el) =>
                <SignupsubinfoBox>
                   <el.svg> </el.svg> <label>{el.content}</label>
                </SignupsubinfoBox>
            )}
            <Signuplabel>Collaborate and share knowledge with a private group for FREE.
                Get Stack Overflow for Teams free for up to 50 users.</Signuplabel>
            
        </SignupinfoBox>
        <SignupResponsiveBox>
            <h3>Create your Stack Overflow account. It’s free and only takes a minute.</h3>
        </SignupResponsiveBox>
        </>

    )
}

export default Signupinfo;