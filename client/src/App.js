import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routes';

import { setCredentials } from './redux/actionCreators/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth && auth.token && auth.userId) dispatch(setCredentials(auth.token, auth.userId));
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};
