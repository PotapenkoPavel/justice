import { Route, Routes, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import AddArticlePage from './pages/AddArticle/AddArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SignInPage from './pages/SignInPage/SignInPage';
import LogInPage from './pages/LogInPage/LogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const ProtectedRoute = ({ isAuth, children }) => (!isAuth ? <Navigate to="/login" /> : children);

const AppRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route
        path="articles"
        element={(
          <ProtectedRoute isAuth={isAuth}>
            <ArticlesPage />
          </ProtectedRoute>
        )}
      />
      <Route
        path="/add-article"
        element={(
          <ProtectedRoute isAuth={isAuth}>
            <AddArticlePage />
          </ProtectedRoute>
        )}
      />
      <Route
        path="/profile"
        element={(
          <ProtectedRoute isAuth={isAuth}>
            <ProfilePage />
          </ProtectedRoute>
        )}
      />
    </Routes>
  );
};

export default AppRoutes;
