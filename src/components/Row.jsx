import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: ${(props) => props.$alignItems || 'center'};
  justify-content: ${(props) => props.$justifyContent || 'normal'};
  ${(props) => (props.$fulled ? 'width: 100%;' : '')}
  gap: ${(props) => props.$gap || 0}px;
`;

export default Row;
