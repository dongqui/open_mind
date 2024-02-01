import styled from 'styled-components';
import { useEffect } from 'react';

import usePagination from 'hooks/usePagenation';
import Row from './Row';

export default function Pagination({ itemCount, bundle = 8, onChange, initPage = 1 }) {
  const { currentPage, setCurrentPage, pages, lastPage } = usePagination({ itemCount, bundle, initPage });
  const hanldeChangePage = (page) => {
    if (page) {
      onChange(page);
      setCurrentPage(page);
    }
  };
  const handleClickLeft = () => hanldeChangePage(currentPage - 1);
  const handleClickRight = () => hanldeChangePage(currentPage + 1);
  const handleClickPage = (page) => () => hanldeChangePage(page);

  useEffect(() => {
    if (initPage) {
      setCurrentPage(+initPage);
    }
  }, [initPage]);
  return (
    <Row>
      <PageButton disabled={currentPage === 1} onClick={handleClickLeft}>
        {'<'}
      </PageButton>
      {pages.map((number) => (
        <PageButton onClick={handleClickPage(number)} $isActive={currentPage === number} key={number}>
          {number}
        </PageButton>
      ))}
      <PageButton disabled={currentPage === lastPage} onClick={handleClickRight}>
        {'>'}
      </PageButton>
    </Row>
  );
}

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props) => (props.$isActive ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  font-weight: ${(props) => (props.$isActive ? 'bold' : 400)};
  &:hover {
    &:not(:disabled) {
      color: var(--Braown-40);
      font-weight: bold;
    }
  }
  &:disabled {
    cursor: default;
  }
`;
