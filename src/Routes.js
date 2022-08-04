import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import AddArticlePage from './pages/AddArticle/AddArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SignInPage from './pages/SignInPage/SignInPage';
import LogInPage from './pages/LogInPage/LogInPage';

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) return <Navigate to="/sign-in" replace />;

  return children;
};

const AppRoutes = () => {
  const isAuth = Boolean(JSON.parse(localStorage.getItem('user')));

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route
        isAuth={isAuth}
        path="articles"
        element={(
          <ProtectedRoute>
            <ArticlesPage />
          </ProtectedRoute>
        )}
      />
      <Route
        isAuth={isAuth}
        path="/add-article"
        element={(
          <ProtectedRoute>
            <AddArticlePage />
          </ProtectedRoute>
        )}
      />
    </Routes>
  );
};

export default AppRoutes;
