import cx from 'classnames';

import './Button.sass';

const Button = ({
  children, theme = 'dark', variant = 'default', mix, ...props
}) => (
  <button className={cx('button', theme, variant, mix)} {...props}>{children}</button>
);

export default Button;
