import styled from "styled-components"
import { createPortal } from "react-dom"

export default function Modal({ children }) {
  return createPortal(<Container>{children}</Container>, document.getElementById('portal-modal'));
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--Dim, rgba(0, 0, 0, 0.56));
  z-index: 1;
`