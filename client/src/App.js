import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import AppRoutes from './Routes';

import { tryAuthenticate } from './redux/actionCreators/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tryAuthenticate());
  });

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};
