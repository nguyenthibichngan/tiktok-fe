import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://i.pinimg.com/236x/1e/de/d6/1eded69eed40704b69fac23adc246615.jpg"
                    alt=""
                />
                <Button className={cx(;)} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Bichngann</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')}>Bich Ngan</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('babel')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('babel')}>likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
