function Edit() {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconPencil"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z" />
    </svg>
  );
}

function Delete() {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconClear"
      width="36"
      height="36"
      viewBox="0 0 18 18"
    >
      <path d="M15 4.41 13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41Z" />
    </svg>
  );
}

export { Edit, Delete };
