import styled from "styled-components";
import { SignupinputBox } from './Signupcontainer';
import {SignupExclamation} from './SvgComponents'

const Signupinputtext = styled.input`
    width : 270px;
    height : 31px;
    padding-left : 10px;
    border : 1px solid ${({pass}) => pass? "rgb(215 218 224)" : "red"};
    border-radius : 5px;
`

const Signupinputlabel = styled.label`
    margin : 5px 0 5px 0;
    width : 268px;
    height : 19.6px;
    padding : 0 2px 0 2px;
    font-weight: bold;
    display: inline-block;
    
`


const Input = ({bind}) => {
    return (
        <>
            <Signupinputlabel htmlFor={bind.id}>{bind.id}</Signupinputlabel>
            <SignupinputBox>
                <Signupinputtext {...bind} ></Signupinputtext>
                {bind.pass ? null : <SignupExclamation className="Exclamation"></SignupExclamation>}
            </SignupinputBox>
        </>
    )

}

export {Signupinputtext,Signupinputlabel,Input};