import styled from 'styled-components';

const TittleBox = styled.div`
  width: 300px;
  display: flex;
  color: var(--black-600);
  background-color: var(--black-010);
  font-size: 15px;
  padding: 12px 15px;
  margin: 1.9rem 0 0 1.5rem;
  border: 1px solid var(--black-100);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
`;

const RightSidebarTittleBox = () => {
  return <TittleBox>Collectives</TittleBox>;
};

export default RightSidebarTittleBox;
