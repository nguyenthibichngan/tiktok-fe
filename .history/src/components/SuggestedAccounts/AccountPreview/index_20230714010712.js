import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('')}>
                <img className={cx('avatar')} src="" alt="" />
            </header>
        </div>
    );
}

export default AccountPreview;
