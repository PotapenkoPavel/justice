import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import AddArticlePage from './pages/AddArticle/AddArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SignInPage from './pages/SignInPage/SignInPage';
import LogInPage from './pages/LogInPage/LogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const ProtectedRoute = ({ isAuth, children }) => (isAuth ? <Navigate to="login" /> : children);

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
      <Route
        isAuth={isAuth}
        path="/profile"
        element={(
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        )}
      />
    </Routes>
  );
};

export default AppRoutes;
