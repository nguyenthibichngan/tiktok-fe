import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

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
                <Button primary>Follow</Button>
            </div>
            <div className={cx('nickname')}></div>
        </div>
    );
}

export default AccountPreview;
