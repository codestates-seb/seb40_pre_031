import RECAPTCHA from 'react-google-recaptcha';

const SignupRecaptcha = ({setIschecked, captchaRef})=>{

    const onChange = (res) =>{
        //res에는 토큰이담김
        //captchaRef.current.getValue();로도 토큰을 받아올수 있음.
        res ? setIschecked(true) : setIschecked(false)
    }

    return (
        <RECAPTCHA sitekey = {process.env.REACT_APP_SITE_KEYv2} onChange={onChange} size = "compact" ref={captchaRef}></RECAPTCHA>
    )
}

export default SignupRecaptcha;