import cx from 'classnames';

import './Button.sass';

export const Button = ({
  children, theme = '', mix, ...props
}) => (
  <button className={cx('button', theme, mix)} {...props}>{children}</button>
);
