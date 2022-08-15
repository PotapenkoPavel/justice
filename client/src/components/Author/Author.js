import Avatar from '../Avatar/Avatar';

import './Author.sass';

const Author = ({ name, img }) => (
  <div className="author">
    <Avatar name={name} url={img} size="small" />
    <div className="author__name">{name}</div>
  </div>
);

export default Author;
