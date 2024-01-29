import styled from 'styled-components';

const BoxButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid transparent;
  ${(props) => props.$size};
  ${(props) => props.$fulled && 'width: 100%'};
  border: 2px solid transparent;
`;

export default BoxButton;
