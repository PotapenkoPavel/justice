import Avatar from '../Avatar/Avatar';

import './AuthorCard.sass';

const AuthorCard = ({ data }) => (
  <div className="author-card">
    <div className="author-card__wrapper">
      <Avatar url={data.url} size="medium" />
      <div className="author-card__name">{data.name}</div>
      <div className="author-card__description">
        {data.description}
      </div>
    </div>
  </div>
);

export default AuthorCard;
