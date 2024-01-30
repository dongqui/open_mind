import styled from 'styled-components';

import { useDropdown, DropdownProvider } from './DropdownProvider';

function Dropdown({ children }) {
  return (
    <DropdownProvider>
      <Container>{children}</Container>
    </DropdownProvider>
  );
}

function DropdownHeader({ children }) {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <button onClick={() => setIsOpen(!isOpen)} onBlur={() => setTimeout(() => setIsOpen(false), 100)}>
      {children}
    </button>
  );
}

function DropdownMenu({ children }) {
  const [isOpen] = useDropdown();
  return isOpen ? <DropdownMenuStyle>{children}</DropdownMenuStyle> : null;
}
const Container = styled.div`
  position: relative;
`;

const DropdownMenuStyle = styled.ul`

  position: absolute;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--Grayscale-30);
  background: var(--Grayscale-10);
  box-shadow: var(--Shadow-1pt);
`;

const DropdownItem = styled.li`
  width: 100%;  
  min-width: max-content;
  font-weight: 500;
  line-height: 18px;
  padding: 6px 16px;
  background: var(--Grayscale-10);
  color: var(--Grayscale-50);
  gap: 8px;
  cursor: pointer;
  &:disabled {
    cursor: default;
    color: var(--Grayscale-40);
  }

  &:hover {
    &:not(:disabled) {
      color: var(--Grayscale-60);
      background: var(--Grayscale-20);
    }
  }

  &.selected {
    color: var(--Blue-50);
  }

  & img {
    width: 14px;
    height: 14px;
  }
`;

Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Header = DropdownHeader;

export default Dropdown;
