import { useNavigate } from 'react-router-dom';

import './Logo.sass';

const Logo = ({ type = 'dark' }) => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>
      <img className="logo__img" src={`/images/logo${type}.svg`} alt="logo" />
    </div>
  );
};

export default Logo;
