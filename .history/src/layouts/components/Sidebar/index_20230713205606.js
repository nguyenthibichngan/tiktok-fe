import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem />
            </Menu>
        </aside>
    );
}

export default Sidebar;
