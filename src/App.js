import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import AddArticlePage from './pages/AddArticle/AddArticlePage';
import SignInPage from './pages/SignInPage/SignInPage';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="add-article" element={<AddArticlePage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="sign-in" element={<SignInPage />} />
    </Routes>
    <Footer />
  </>
);
