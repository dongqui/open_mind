import { useState } from 'react';

export default function usePagination({ itemCount, bundle, initPage }) {
  const [currentPage, setCurrentPage] = useState(initPage);
  const lastPage = Math.ceil(itemCount / bundle);
  const bundleCount = Math.ceil(currentPage / bundle) - 1;
  const pages = new Array(bundle)
    .fill(0)
    .map((_, index) => index + 1 + bundle * bundleCount)
    .filter((page) => page <= lastPage);

  return {
    currentPage,
    setCurrentPage,
    pages,
    lastPage,
  };
}
