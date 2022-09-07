import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import banner from '@/assets/images/banner.jpg';
import Products from '@/components/Products/';

const cx = classNames.bind(styles);

export default function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('banner')} style={{ backgroundImage: `url(${banner})` }}>
                <div className={cx('text')}>
                    <h1 className={cx('title')}>NEW SEASON ARRIVALS</h1>
                    <p className={cx('subtitle')}>CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
            <Products />
        </div>
    );
}
