import Avatar from '../Avatar/Avatar';

import './AuthorCard.sass';

const AuthorCard = ({
  img, children,
}) => (
  <div className="author-card">
    <div className="author-card__wrapper">
      <Avatar url={img} size="medium" />
      { children }
    </div>
  </div>
);

export default AuthorCard;
