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
                <Image
                    className={cx('avatart')}
                    src="https://i.pinimg.com/236x/1c/5e/a3/1c5ea37379d12dd89d9d4885f88fd84f.jpg"
                    atl="Bichnagnn"
                />
                <span className={cx('nickname')}>
                    <strong>Bichnagnn</strong>
                </span>
                <span className={cx('name')}>Bich Ngan</span>
                <p className={cx('description')}>description</p>
                <MusicIcon />
                <p className={cx('music')}>music</p>
            </div>
            <Button outline>Follow</Button>
            <div>
                <video
                    className={cx('video')}
                    loop
                    src="https://www.pinterest.com/5c4f58e7-1ff0-46df-8ec2-a89bd1cffb40"
                />
            </div>
        </div>
    );
}

export default Content;
