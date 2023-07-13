import PropTypes from

import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [failback, setFailback] = useState('');

    const handleError = () => {
        setFailback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={failback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
