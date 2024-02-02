import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function useInitSubjectsParams() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState();
  const [sort, setSort] = useState();
  const pageInQueryString = searchParams.get('page');
  const sortInQueryString = searchParams.get('sort');

  useEffect(() => {
    if (pageInQueryString) {
      setPage(pageInQueryString);
    }
    if (sortInQueryString) {
      setSort(sortInQueryString);
    }
  }, [pageInQueryString, sortInQueryString]);

  return { page, sort };
}
