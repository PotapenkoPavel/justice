import { useState } from 'react';

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(Boolean(JSON.parse(localStorage.getItem('user'))));

  const register = ({
    firstName, lastName, email, password,
  }) => {
    localStorage.setItem('user', JSON.stringify({
      firstName, lastName, email, password,
    }));

    setIsAuth(true);
  };

  const login = ({
    email, password,
  }) => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  };

  return {
    isAuth, register, login, logout,
  };
};

export default useAuth;
