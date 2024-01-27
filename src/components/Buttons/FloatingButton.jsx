import styled from "styled-components";

const FloatingButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 200px;
  box-shadow: var(--shadow-3pt);
  color: var(--Grayscale-10, #FFF);
  background-color: var(--Brown-40, #542F1A);
  position: fixed;
  font-size: 20px;
  line-height: 25px; 
  width: 208px;
  height: 54px;
  ${(props) => props.$top ? `top: ${props.$top}px;` : ''}
  ${(props) => props.$left ? `left: ${props.$left}px;` : ''}
  ${(props) => props.$right ? `right: ${props.$right}px;` : ''}
  ${(props) => props.$bottom ? `bottom: ${props.$bottom}px;` : ''}
`

export default FloatingButton;