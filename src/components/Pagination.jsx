import styled from "styled-components";
import { useEffect, useState } from "react";

import Row from "./Row";

export default function Pagination({ itemCount, bundle=5, initPage=1, onChange }) {
  const [currentPage, setCurrentPage] = useState(initPage);
  const lastPage = Math.ceil(itemCount / bundle);
  const bundleCount = Math.ceil(currentPage / bundle) - 1;
  const pages = new Array(bundle).fill(0).map((v, index) => (index + 1 +  bundle * bundleCount)).filter(page => page <= lastPage);

  const handleClickLeft = () => {
    const nexetPage = currentPage - 1;
    setCurrentPage(nexetPage);
  };

  const handleClickRight = () => {
    const nexetPage = currentPage + 1;
    setCurrentPage(currentPage + 1);
  };

  const handleClickPage = (page) => () => setCurrentPage(page);

  useEffect(() => {
    onChange(currentPage)
  }, [currentPage])

  return (
    <Row>
      <Button disabled={currentPage === 1} onClick={handleClickLeft}>{'<'}</Button>
      {pages.map(number => <Button onClick={handleClickPage(number)} $isActive={currentPage === number} key={number}>{number}</Button>)}
      <Button disabled={currentPage === lastPage} onClick={handleClickRight}>{'>'}</Button>
    </Row>
  )
}

const Button = styled.button`
  width: 40px;
  height: 40px;
  color: ${props => props.$isActive ? "var(--Brown-40)": "var(--Grayscale-40)"};
  &:hover {
    &:not(:disabled) {
      color: var(--Braown-40);
    }    
  }
  &:disabled {
    cursor: default;
  }
`;