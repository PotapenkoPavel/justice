import cx from 'classnames';
import './Button.sass';

export const Button = ({
  children, type = '', theme = '', onClick,
}) => (
  <button className={cx('button', type, theme)} onClick={onClick}>{children}</button>
);
