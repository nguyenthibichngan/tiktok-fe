import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Content({ data = [] }) {
    console.log(data);
    return (
        <div>
            {data.map((account) => (
                
            ))}
        </div>
    );
}

export default Content;
