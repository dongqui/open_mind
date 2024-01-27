import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || 0}px;
`;

export default Column;
