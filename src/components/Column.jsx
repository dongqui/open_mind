import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || 0}px;
  ${(props) => (props.$fulled ? 'width:100%;' : '')}
`;

export default Column;
