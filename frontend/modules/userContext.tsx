import React from 'react';
import { createContext, FC, ReactNode, useState, useEffect } from 'react';

interface User {
  username: string;
}

interface UserContextProps {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 세션 스토리지에서 사용자 정보를 가져옴
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string) => {
    const newUser = { username };
    setUser(newUser);
    // 세션 스토리지에 사용자 정보 저장
    sessionStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    // 세션 스토리지에서 사용자 정보 제거
    sessionStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
