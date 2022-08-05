import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';
import { Nav } from '../Nav/Nav';

import useAuth from '../../hooks/useAuth';

import './Header.sass';

export const Header = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <img className="logo__img" src="/images/logodark.svg" alt="logo" />
        </div>

        {isAuth ? (<Nav buttonSettings={{ theme: 'primary' }} />) : (
          <div className="header__auth-block">
            <Button theme="outline" onClick={() => navigate('/login')}>Log in</Button>
            <Button theme="primary" onClick={() => navigate('/sign-in')}>Sign in</Button>
          </div>
        )}
      </div>
    </header>
  );
};
