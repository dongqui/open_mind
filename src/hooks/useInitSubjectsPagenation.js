import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function useInitSubjectsPagenation() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState();
  const pageInQueryString = searchParams.get('page');

  useEffect(() => {
    if (pageInQueryString) {
      setPage(pageInQueryString);
    }
  }, [pageInQueryString]);

  return page;
}
