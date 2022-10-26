import styled from "styled-components";


const Socialbutton = styled.button`
    width : ${({size}) => size};
    box-sizing: content-box;
    height : 15px;
    padding : 0.8em;
    margin : 4px 0 4px 0px;
    border : 1px solid rgb(215 218 224);
    border-radius: 5px;
    cursor:pointer;
    text-align:center;
    display :flex;
    justify-content : center;
    align-items : center;
    background : ${({ name }) => name === "Google" ? "rgb(255 255 255)" : name === "Naver" ? "#03C75A" : name === "GitHub" ? "rgb(47 51	55)": "rgb(13 149 255)"};
    color : ${({ color }) => color};

    .Socialsvg{
        width : 20px;
        height : 20px;
        margin : 0 10px 0 0;
    }

`


export { Socialbutton };