import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <h3></h3>
            </div>
            <div className={cx('video')}></div>
        </div>
    );
}

export default Content;
