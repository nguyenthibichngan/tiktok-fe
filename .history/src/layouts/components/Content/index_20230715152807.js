import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Content.module.scss';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatart')}
                src="https://i.pinimg.com/236x/c9/2c/6b/c92c6bbd77a82df51758dc47460c148c.jpg"
                atl="Bichnagnn"
            />
            <div className={cx('content')}>
                <div className={cx('text')}>
                    <span className={cx('nickname')}>
                        <strong>Bichnagnn</strong>
                    </span>
                    <span className={cx('name')}>Bich Ngan</span>

                    <Button className={cx('follow-btn')} outline>
                        Follow
                    </Button>
                    <p className={cx('description')}>Trời mưa đào ăn sẽ không ngon</p>

                    <MusicIcon />
                    <p className={cx('music')}>music hayyyyyyyyyy</p>
                </div>
                <div className={cx('video-wrapper')}>
                    <video
                        className={cx('video')}
                        loop
                        src="https://v1.pinimg.com/videos/mc/720p/01/05/c3/0105c3f42f3e94b5fd04fc9a7bc43737.mp4"
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;
