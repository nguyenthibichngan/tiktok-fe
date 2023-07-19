import classNames from 'classnames/bind';

import Image from '~/components/Image';
import styles from './Content.module.scss';
import { CommentIcon, FavoriteIcon, HeartIcon, MusicIcon, ShareIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ContentItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatart')} src={data.avatar} atl={data.nickname} />
            <div className={cx('content')}>
                <div className={cx('text')}>
                    <span className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                    </span>
                    <span className={cx('name')}>{`${data.first_name} ${data.last_name}`}</span>

                    <p className={cx('description')}></p>
                    <Button className={cx('follow-btn')} outline>
                        Follow
                    </Button>

                    <MusicIcon className={cx('music-btn')} />
                    <span className={cx('music')}>music hihihihihii</span>
                </div>
                <div className={cx('video-wrapper')}>
                    <video
                        className={cx('video')}
                        loop
                        controls
                        src="https://v1.pinimg.com/videos/mc/720p/01/05/c3/0105c3f42f3e94b5fd04fc9a7bc43737.mp4"
                    />
                    <div className={cx('action')}>
                        <button className={cx('text-action')}>
                            <span className={cx('action-icon')}>
                                <HeartIcon />
                            </span>
                            <strong>4M</strong>
                        </button>
                        <button className={cx('text-action')}>
                            <span className={cx('action-icon')}>
                                <CommentIcon />
                            </span>
                            <strong>2690</strong>
                        </button>
                        <button className={cx('text-action')}>
                            <span className={cx('action-icon')}>
                                <FavoriteIcon />
                            </span>
                            <strong>1.4M</strong>
                        </button>
                        <button className={cx('text-action')}>
                            <span className={cx('action-icon')}>
                                <ShareIcon />
                            </span>
                            <strong>3.2K</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
