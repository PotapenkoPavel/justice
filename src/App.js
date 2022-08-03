import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import AddArticlePage from './pages/AddArticle/AddArticlePage';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="add-article" element={<AddArticlePage />} />
    </Routes>
    <Footer />
  </>
);
