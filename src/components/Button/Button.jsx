import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ sameSize, children, className, normal, addCart, onClick }) {
    const classes = cx('btn', {
        sameSize,
        normal,
        addCart,
        [className]: className,
    });

    return (
        <button
            className={classes}
            onClick={
                onClick &&
                (() => {
                    onClick();
                })
            }
        >
            {children}
        </button>
    );
}
Button.propTypes = {
    sameSize: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
