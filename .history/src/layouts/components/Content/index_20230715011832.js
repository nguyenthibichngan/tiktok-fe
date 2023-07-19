import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <span className={cx('nickname')}>
                    <strong>Bichngann</strong>
                </span>
                <span className={cx('name')}>Bich Ngan</span>
                <p className={cx('description')}>description</p>
                <p className={cx('music')}>music</p>
            </div>
            <Button primary>Follow</Button>
            <div className={cx('video')}></div>
        </div>
    );
}

export default Content;
