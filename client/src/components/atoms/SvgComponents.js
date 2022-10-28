import styled from "styled-components";

function Signupquestion(props) {
  return (
    <svg width={26} height={26} className="Signupsvg" {...props} fill="rgb(10,149,255)">
      <path
        d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
        opacity={0.5}
      />
      <path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z" />
    </svg>
  );
}

function SignupUpandDown(props) {
  return (
    <svg width={26} height={26} className="Signupsvg" {...props} fill="rgb(10,149,255)">
      <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z" />
      <path
        d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
        opacity={0.5}
      />
    </svg>
  );
}

function Signuptag(props) {
  return (
    <svg width={26} height={26} className="Signupsvg" {...props} fill="rgb(10,149,255)">
      <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z" />
      <path
        d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
        opacity={0.5}
      />
    </svg>
  );
}

function Signuptrophy(props) {
  return (
    <svg width={26} height={26} className="Signupsvg" {...props} fill="rgb(10,149,255)">
      <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z" />
    </svg>
  );
}

function SignupExclamation(props) {
  return (
    <svg
      width={18}
      height={18}
      aria-hidden="true"
      className="s-input-icon js-alert-icon svg-icon iconAlertCircle d-none"
      viewBox="0 0 18 18"
      {...props}
      fill = "rgb(223 79 84)"
      
    >
      <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z" />
    </svg>
  );
}

function LoginStackoverflow(props) {
  return (
    <svg
      width={32}
      height={37}
      aria-hidden="true"
      className="native svg-icon iconLogoGlyphMd"
      viewBox="0 0 32 37"
      {...props}
    >
      <path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9h22Z" />
      <path
        fill="#F48024"
        d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
      />
    </svg>
  );
}

export {SignupUpandDown, Signupquestion, Signuptag, Signuptrophy, SignupExclamation, LoginStackoverflow};
