import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

import './Nav.sass';

export const Nav = ({ buttonSettings }) => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item"><Link className="nav__link" href="/" to="/">All articles</Link></li>
      <li className="nav__item"><Link className="nav__link" href="/" to="articles">My articles</Link></li>
      <li className="nav__item"><Link className="nav__link" href="/" to="/">Add article</Link></li>
      <li className="nav__item"><Link className="nav__link" href="/" to="/">Profile</Link></li>
    </ul>
    <Button {...buttonSettings}>Logout</Button>
  </nav>
);
