import styled from 'styled-components';

const AvartarImage = styled.div`
  width: 16px;
  height: 16px;
  display: block;
  border: none;
  background: ${(props) => props.color};
`;

const Avartar = ({ color }) => {
  return <AvartarImage color={color} />;
};

export default Avartar;
