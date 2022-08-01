import cx from 'classnames'
import './Button.sass'

export const Button = ({children, type = '', theme = ''}) => {
    return <button className={cx('button', type, theme)}>{children}</button>
}