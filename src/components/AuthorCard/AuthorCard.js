import Avatar from '../Avatar/Avatar';

import './AuthorCard.sass';

const AuthorCard = ({ img, name, description }) => (
  <div className="author-card">
    <div className="author-card__wrapper">
      <Avatar url={img} size="medium" />
      <div className="author-card__name">{name}</div>
      <div className="author-card__description">
        {description}
      </div>
    </div>
  </div>
);

export default AuthorCard;
