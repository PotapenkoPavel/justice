import cx from 'classnames'

import './Avatar.sass'

export default function Avatar({url, size}) {
    return <img className={cx('avatar', size)} src={url} alt="avatar"/>
}