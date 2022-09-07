import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';

import { useSelector, useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Header() {
    const productCarts = useSelector((state) => state.allProducts.productCart);

    const totalProduct = productCarts.reduce((total, product) => total + product.quantity, 0);

    return (
        <div className={cx('header')}>
            <Link to={'/'}>
                <div className={cx('brand')}>VCL COLLECTION</div>
            </Link>
            <div className={cx('navbar')}>
                <Link to={'/'}>
                    <div className={cx('navbar-item')}>Home</div>
                </Link>
                <Link to={'/products'}>
                    <div className={cx('navbar-item')}>Products</div>
                </Link>
                <div className={cx('navbar-item')}>About</div>
                <div className={cx('navbar-item')}>Contact</div>
            </div>
            <div className={cx('button')}>
                <Button sameSize className={cx('btn-item')}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <span>Login</span>
                </Button>
                <Button sameSize className={cx('btn-item')}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Register</span>
                </Button>
                <Link to={'/cart'}>
                    <Button sameSize className={cx('btn-item', ['btn-mobile'])}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('btn-shop')} />{' '}
                        <span className={cx('cart-name')}>Cart</span>
                        <span className={cx('cart-list')}>{`(${totalProduct})`}</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
