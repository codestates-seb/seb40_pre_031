import React from 'react';
import styled from 'styled-components';

const AvartarImage = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  border: none;
  background-color: var(--orange);
  `;

const Avartar = () => {
  return (
    <AvartarImage />
  );
};

export default Avartar;