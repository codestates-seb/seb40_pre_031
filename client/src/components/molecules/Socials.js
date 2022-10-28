import styled from "styled-components";
import { Socialbutton } from '../atoms/Socialbutton'
import { SiNaver } from 'react-icons/si';
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
                        <Socialbutton size = "293.2px"name={el.name} color={el.color}>
                            <el.svg className="Socialsvg" />
                        Sign up with {el.name}</Socialbutton>
                    </dt>
                )}
            </dl>
        </>
    )
}

export default Socials;
