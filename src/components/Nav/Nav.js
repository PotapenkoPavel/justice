import { Button } from '../Button/Button';

import './Nav.sass';

export const Nav = ({ buttonSettings }) => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item"><a className="nav__link" href="/">All articles</a></li>
      <li className="nav__item"><a className="nav__link" href="/">My articles</a></li>
      <li className="nav__item"><a className="nav__link" href="/">Add article</a></li>
      <li className="nav__item"><a className="nav__link" href="/">Profile</a></li>
    </ul>
    <Button {...buttonSettings}>Logout</Button>
  </nav>
);
