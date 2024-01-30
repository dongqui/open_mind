import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || 0}px;
  ${(props) => (props.$fulled ? 'width:100%;' : '')}
  align-items: ${(props) => props.$alignItems || 'normal'};
  justify-content: ${(props) => props.$justifyContent || 'normal'};
`;

export default Column;
