import styled from "styled-components";

const SignupinfoPassword = styled.p`
    width : 268px;
    margin : ${({margin,theme}) => theme.margin[margin]};
    font-size : 12px;
    font-weight : 500;
    color : ${({color}) => color}; 
`
const SignupinfoExplamation = styled.p`
width : 268px;
height: 20px;
font-size : 12px;
font-weight : 500;
color : rgb(229	62	66);
`
export  {SignupinfoPassword, SignupinfoExplamation};