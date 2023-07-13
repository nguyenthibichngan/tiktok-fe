import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Tippy>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://i.pinimg.com/236x/1e/de/d6/1eded69eed40704b69fac23adc246615.jpg"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Bichngaan</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('username')}>Bich Ngaan</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.prototype = {};

export default AccountItem;
