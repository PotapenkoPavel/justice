import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../Button/Button';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';

import './Header.sass';

export const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="header">
      <Container>
        <Logo />

        {isAuth
          ? <Nav buttonTheme="dark" />
          : (
            <div className="header__buttons">
              <Button variant="outline" onClick={() => navigate('/login')}>Log in</Button>
              <Button onClick={() => navigate('/sign-in')}>Sign in</Button>
            </div>
          )}
      </Container>
    </header>
  );
};

export default Header;
