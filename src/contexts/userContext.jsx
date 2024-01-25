import { useState, createContext, useEffect, useContext, useMemo } from 'react';

const UserContext = createContext({
  userList: [],
});

export function UserProvider({ children }) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const rawUser = localStorage.getItem('userList');
    setUserList(JSON.parse(rawUser || '[]'));
  }, []);

  function getExistUser(name) {
    return userList.find((user) => user.name === name);
  }

  function addUser(user) {
    const newUserList = [...userList, user];
    setUserList(newUserList);
    localStorage.setItem('userList', JSON.stringify(newUserList));
  }

  const contextValue = useMemo(() => ({ userList, getExistUser, addUser }), [userList]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
