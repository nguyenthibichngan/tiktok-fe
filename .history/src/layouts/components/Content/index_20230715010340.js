import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <h3 className={cx('nickname')}>
                    <strong>Bichngann</strong>
                </h3>
                <h4></h4>
            </div>
            <div className={cx('video')}></div>
        </div>
    );
}

export default Content;
