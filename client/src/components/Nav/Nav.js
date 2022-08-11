import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../Button/Button';
import { logout } from '../../redux/actionCreators/auth';

import './Nav.sass';

export const Nav = ({ buttonSettings }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/">All articles</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/articles">My articles</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/add-article">Add article</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/profile">Profile</Link></li>
      </ul>
      <Button {...buttonSettings} onClick={clickHandler}>Logout</Button>
    </nav>
  );
};
