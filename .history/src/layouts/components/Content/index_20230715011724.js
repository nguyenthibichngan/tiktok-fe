import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <p className={cx('nickname')}>
                    <strong>Bichngann</strong>
                </p>
                <p className={cx('name')}>Bich Ngan</p>
                <h4 className={cx('description')}>description</h4>
                <h4 className={cx('music')}>music</h4>
            </div>
            <Button primary />
            <div className={cx('video')}></div>
        </div>
    );
}

export default Content;
