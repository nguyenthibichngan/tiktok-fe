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
            <div className={cx('video')}>
                <video
                    loop
                    src="https://v19-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/o4BFA6SrTedG5EXgQkDnQBbYoGSfQNNcBJaVLR/?a=1988&ch=0&cr=0&dr=0&lr=unwatermarked&cd=0%7C0%7C0%7C0&cv=1&br=1128&bt=564&cs=0&ds=6&ft=_RwJrBgkq8ZmogXhoc_vjy6a_AhLrus&mime_type=video_mp4&qs=0&rc=aGZnaWk5aGU0PDpoM2c3NkBpMzx0ZTs6Zm9xbDMzNzczM0AyLi9iMWItX2AxMy1jNWA0YSMzX2RicjRfM2pgLS1kMTZzcw%3D%3D&btag=e00080000&expire=1689424219&l=20230715062933450F128AAFC4A024D08C&ply_type=2&policy=2&signature=933b97b9d0d17f4989a39831569ab341&tk=tt_chain_token"
                />
            </div>
        </div>
    );
}

export default Content;
