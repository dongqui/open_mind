import styled from 'styled-components';

const BoxButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${(props) => props.$size};
  ${(props) => props.$fulled && 'width: 100%'};
`;

export default BoxButton;
