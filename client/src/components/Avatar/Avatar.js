import cx from 'classnames';

import './Avatar.sass';

const Avatar = ({ url, size }) => (
  <img
    className={cx('avatar', size)}
    src={url || '/images/avatar123.jpg'}
    alt="avatar"
  />
);

export default Avatar;
