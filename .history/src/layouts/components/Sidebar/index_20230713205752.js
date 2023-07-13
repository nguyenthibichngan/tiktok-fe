import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={null} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
