function SvgChat(props) {
  return (
    <svg
      width={20}
      height={18}
      aria-hidden="true"
      className="svg-icon iconInbox"
      style={{
        userSelect: 'auto',
      }}
      viewBox="0 0 20 18"
      {...props}
    >
      <path
        d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"
        style={{
          userSelect: 'auto',
        }}
      />
    </svg>
  );
}

function SvgHelp(props) {
  return (
    <svg
      width={18}
      height={18}
      aria-hidden="true"
      className="svg-icon iconHelp"
      style={{
        userSelect: 'auto',
      }}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"
        style={{
          userSelect: 'auto',
        }}
      />
    </svg>
  );
}

export { SvgChat, SvgHelp };
