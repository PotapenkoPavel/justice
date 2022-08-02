import cx from 'classnames';
import './Button.sass';

export const Button = ({ children, type = '', theme = '' }) => (
  <button className={cx('button', type, theme)}>{children}</button>
);
