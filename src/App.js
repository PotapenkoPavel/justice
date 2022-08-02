import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="articles" element={<ArticlesPage />} />
    </Routes>
    <Footer />
  </>
);
