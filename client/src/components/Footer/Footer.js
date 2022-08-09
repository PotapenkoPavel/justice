import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';
import { Nav } from '../Nav/Nav';

import './Footer.sass';

export const Footer = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__head">
          <div className="logo" onClick={() => navigate('/')}>
            <img className="logo__img" src="/images/logolight.svg" alt="" />
          </div>

          {isAuth ? (<Nav buttonSettings={{ theme: 'outline light' }} />) : (
            <div className="footer__auth-block">
              <Button theme="text light" onClick={() => navigate('/login')}>Log in</Button>
              <Button theme="outline light" onClick={() => navigate('/sign-in')}>Sign in</Button>
            </div>
          )}

        </div>
        <div className="footer__bottom">
          <div>© 2022 Justice-it. All rights reserved.</div>
          <div>© 2022 Justice-team. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
