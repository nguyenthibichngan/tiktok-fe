import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://i.pinimg.com/236x/c6/f0/14/c6f014c8a7701c14d6a9f564b545b2c0.jpg" alt="Ngan" />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Bich Ngan</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>bichngan</span>
        </div>
    </div>
}

export default AccountItem;