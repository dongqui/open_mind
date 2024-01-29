import { useState, createContext, useEffect, useContext, useMemo, useRef } from 'react';

const UserContext = createContext({
  user: null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const userListRef = useRef([]);

  useEffect(() => {
    const rawUserList = localStorage.getItem('userList');
    userListRef.current = JSON.parse(rawUserList || '[]');
  }, []);

  function getExistUser(name) {
    return userListRef.current.find((user) => user.name === name);
  }

  function addUser(user) {
    localStorage.setItem('userList', JSON.stringify([...userListRef.current, user]));
    setCurrentUser(user);
  }

  const contextValue = useMemo(() => ({ user: currentUser, getExistUser, addUser }), [currentUser]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
