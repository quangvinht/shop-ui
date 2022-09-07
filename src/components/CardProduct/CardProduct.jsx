import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import PropTypes from 'prop-types';
import Button from '@/components/Button';

import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardProduct({ item }) {
    const navigate = useNavigate();

    const handleToPrudctPage = () => {
        navigate(`/products/${item.id}`);
    };

    return (
        <div className={cx('product-card')}>
            <img src={item.image} alt={item.title} className={cx('image')} />
            <h3 className={cx('title')}>
                {item.title.length >= 20 ? item.title.substring(0, 20) + '...' : item.title}
            </h3>
            <strong className={cx('price')}>{item.price}₫</strong>
            {/* <Link to={`/products/${item.id}`}> */}
            <div className={cx('button')}>
                <Button addCart onClick={handleToPrudctPage}>
                    Buy Now
                </Button>
            </div>
            {/* </Link> */}
        </div>
    );
}
CardProduct.propTypes = {};

export default CardProduct;
