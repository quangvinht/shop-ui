import { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

import { useSelector, useDispatch } from 'react-redux';
import { setProductCart, removeProductCart } from '@/redux/actions/productAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

export default function Cart() {
    const productCarts = useSelector((state) => state.allProducts.productCart);

    const dispatch = useDispatch();

    const totalProduct = productCarts.reduce((total, product) => total + product.quantity, 0);

    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <div className={cx('cart')}>
            {productCarts.map((product) => {
                return (
                    <div key={product.id} className={cx('cart-item')}>
                        <img src={product.image} alt={product.title} className={cx('image')} />
                        <div className={cx('cart-infor')}>
                            <h2 className={cx('title')}>{product.title}</h2>
                            <div className={cx('money')}>
                                <strong>
                                    {product.quantity} X {product.price} ₫ =
                                    {formatter.format(product.quantity * product.price)}
                                </strong>
                            </div>
                            <div className={cx('cart-btn')}>
                                <div
                                    className={cx('cart-btn-item')}
                                    onClick={() => {
                                        dispatch(setProductCart(product));
                                    }}
                                >
                                    <Button normal>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </div>
                                <div
                                    className={cx('cart-btn-item')}
                                    onClick={() => {
                                        dispatch(removeProductCart(product));
                                    }}
                                >
                                    <Button normal>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            {productCarts.length > 0 ? (
                <Button addCart className={cx('btn-pay')}>
                    Pay Now
                </Button>
            ) : (
                <h1 className={cx('cart-empty')}>No Product here !</h1>
            )}
        </div>
    );
}
