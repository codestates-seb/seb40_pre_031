import styled from "styled-components";
import { Socialbutton } from '../atoms/Social'
import { SiNaver } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai'
const data = [
    {
        name: "Google",
        svg: FcGoogle,
        color: "black"
    },
    {
        name: "GitHub",
        svg: AiFillGithub,
        color: "white"
    },
    {
        name: "Naver",
        svg: SiNaver,
        color: "white"
    }
]


const Socials = () => {
    return (
        <>
            <dl>
                {data.map(el =>
                    <dt>
                        <Socialbutton name={el.name} color={el.color}>
                            <el.svg className="Socialsvg" />
                        Sign up with {el.name}</Socialbutton>
                    </dt>
                )}
            </dl>
        </>
    )
}

export default Socials;

// <dt><Socialbutton> <SiNaversvg/>Sign up with Google</Socialbutton></dt>
// <dt><Socialbutton>Sign up with Google</Socialbutton></dt>
// <dt><Socialbutton>Sign up with Google</Socialbutton></dt>