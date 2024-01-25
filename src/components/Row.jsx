import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap}px;
`;

export default Row;
