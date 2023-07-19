import classNames from 'classnames/bind';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content({ data = [] }) {
    console.log(data);
    return (
        <div>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
        </div>
    );
}

export default Content;
