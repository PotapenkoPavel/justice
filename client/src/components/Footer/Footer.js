import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';

import './Footer.sass';

const Footer = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <Logo type="light" />

          {isAuth
            ? <Nav buttonTheme="light" buttonVariant="outline" />
            : (
              <div className="footer__auth-block">
                <Button theme="light" variant="text" onClick={() => navigate('/login')}>Log in</Button>
                <Button theme="light" variant="outline" onClick={() => navigate('/sign-in')}>Sign in</Button>
              </div>
            )}

        </div>
        <div className="footer__bottom">
          <div>© 2022 Justice-it. All rights reserved.</div>
          <div>© 2022 Justice-team. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
