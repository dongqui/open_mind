import { useState, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { getSubjectsApi } from '../apis';

const subjectsAtom = atom({
  key: 'subjectsAtom',
  default: {
    count: 0,
    next: null,
    results: [],
  },
});

export function useSubjects(page = 1, sort = 'name') {
  const DEFAULT_SUBJECT_COUNT = 8;
  const offset = (page - 1) * DEFAULT_SUBJECT_COUNT;
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);

  useEffect(() => {
    async function getSubjects() {
      setIsLoading(true);
      const result = await getSubjectsApi(offset, sort);
      setSubjects(result);
      setIsLoading(false);
    }

    getSubjects();
  }, [page, sort]);

  return {
    isLoading,
    subjects,
  };
}
