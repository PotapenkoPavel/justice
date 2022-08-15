import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from './pages/MainPage/MainPage';
import MyArticlesPage from './pages/MyArticlesPage/MyArticlesPage';
import AddArticlePage from './pages/AddArticlePage/AddArticlePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SignInPage from './pages/SignInPage/SignInPage';
import LogInPage from './pages/LogInPage/LogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const ProtectedRoute = ({ isAuth, children }) => (!isAuth ? <Navigate to="/login" /> : children);

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/articles/1" />} />
      <Route path="/articles/:page" element={<MainPage />} />
      <Route path="/article/:id" element={<ArticlePage />} />

      {!isAuth && (
      <>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/login" element={<LogInPage />} />
      </>
      )}

      <Route
        path="my-articles"
        element={(
          <ProtectedRoute isAuth={isAuth}>
            <MyArticlesPage />
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
