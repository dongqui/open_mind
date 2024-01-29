/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';

export function DropdownProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return <DropdownContext.Provider value={[isOpen, setIsOpen]}>{children}</DropdownContext.Provider>;
}

const DropdownContext = createContext({ isOpen: false });

export const useDropdown = () => useContext(DropdownContext);
