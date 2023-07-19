import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Content({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <Image className={cx('avatart')} src={data.avatar} atl="" />
                <span className={cx('nickname')}>
                    <strong>Bichngann</strong>
                </span>
                <span className={cx('name')}>Bich Ngan</span>
                <p className={cx('description')}>description</p>
                <MusicIcon />
                <p className={cx('music')}>music</p>
            </div>
            <Button outline>Follow</Button>
            <div className={cx('video')}></div>
        </div>
    );
}

export default Content;
