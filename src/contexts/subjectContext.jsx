import { Outlet, useParams } from 'react-router-dom';
import { createContext, useEffect, useState, useContext, useMemo } from 'react';

import { getSubjectApi } from 'apis';

const SubjectContext = createContext({
  subject: null,
});

export function SubjectProvider({ children }) {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSubject() {
      const result = await getSubjectApi(subjectId);
      setSubject(result);
      setIsLoading(false);
    }

    getSubject();
  }, []);
  const contextValue = useMemo(() => ({ subject }), [subject]);

  return <SubjectContext.Provider value={contextValue}>{children}</SubjectContext.Provider>;
}

export function SubjectProviderWithOutlet() {
  return (
    <SubjectProvider>
      <Outlet />
    </SubjectProvider>
  );
}

export const useSubject = () => useContext(SubjectContext);
