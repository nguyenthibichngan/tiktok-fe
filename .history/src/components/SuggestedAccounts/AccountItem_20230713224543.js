import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/236x/ff/ec/fc/ffecfc5ac44dd8a4310ed7ed915cf0fd.jpg"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Bichngaan</strong>
                    <FontAwesomeIcon />
                </p>
                <p className={cx('username')}>Bich Ngaan</p>
            </div>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
