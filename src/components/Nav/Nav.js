import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import useAuth from '../../hooks/useAuth';

import './Nav.sass';

export const Nav = ({ buttonSettings }) => {
  const { logout } = useAuth();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/">All articles</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/articles">My articles</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/add-article">Add article</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/profile">Profile</Link></li>
      </ul>
      <Button {...buttonSettings} onClick={() => logout()}>Logout</Button>
    </nav>
  );
};
