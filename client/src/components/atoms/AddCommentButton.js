import styled from 'styled-components';

const Button = styled.button`
  width: 121.75px;
  height: 35px;
  font-size: 12px;
  background-color: var(--blue-500);
  color: var(--white);
  border-radius: 3px;
  outline: none;
  border: 1px solid transparent;
  padding: 5px;
  margin: 0px 2px;
  :hover {
    background-color: var(--blue-300);
  }
`;

function AddCommentButton({ onClick }) {
  return <Button onClick={onClick}> Add Comment</Button>;
}

export default AddCommentButton;
