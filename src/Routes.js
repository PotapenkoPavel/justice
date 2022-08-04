import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import AddArticlePage from './pages/AddArticle/AddArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SignInPage from './pages/SignInPage/SignInPage';

const AppRoutes = () => {
  const isAuth = Boolean(JSON.parse(localStorage.getItem('user')));

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="add-article" element={<AddArticlePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </>
      )
        : (
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="add-article" element={<Navigate to="/sign-in" replace />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </>
        )}
    </Routes>

  );
};

export default AppRoutes;
