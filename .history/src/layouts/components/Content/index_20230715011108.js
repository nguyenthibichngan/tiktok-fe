import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <h3 className={cx('nickname')}>
                    <strong>Bichngann</strong>
                </h3>
                <h4 className={cx('name')}>Bich Ngan</h4>
                <h4 className={cx('description')}>description</h4>
                <h4 className={cx('music')}>music</h4>
            </div>
            <Button primary />
            <div className={cx('video')}></div>
        </div>
    );
}

export default Content;
