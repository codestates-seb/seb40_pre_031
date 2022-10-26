import styled from "styled-components";

const SignupcontainerBox = styled.form`
    box-sizing: content-box;
    width : 268px;
    height : 610px;
    padding : 24px;
    margin-bottom : 24px;
    border-radius : 5px;
    background-color : white;
`
const SignupRobotBox = styled.div`
    weight : 268px;
    height : 160px;
    background-color : rgb(241 242 243);
`
const SignupinfoBox = styled.div`
    width : 410px;
    height : 285px;
    display : flex;
    flex-direction : column;
    background-color : transparent;

`
const SignupsubinfoBox = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    width : 411px;
    height : 24px;
    margin : 10px 0 10px 0;
    .Signupsvg{
        margin : 0 10px 0 0;
    }
`

export {SignupcontainerBox, SignupRobotBox, SignupinfoBox, SignupsubinfoBox};