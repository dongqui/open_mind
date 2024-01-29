import { useState, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { getSubjectApi } from '../apis';

const subjectAtom = atom({
  key: 'subjectAtom',
  default: null,
});

export function useSubject() {
  return useRecoilState(subjectAtom);
}

export function useGetSubject(subjectId) {
  const [isLoading, setIsLoading] = useState(false);
  const [subject, setSubject] = useSubject();

  useEffect(() => {
    async function getSubject() {
      setIsLoading(true);
      const result = await getSubjectApi(subjectId);
      setSubject(result);
      setIsLoading(false);
    }

    getSubject();
  }, []);

  return { isLoading, subject };
}
