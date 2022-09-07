import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import PropTypes from 'prop-types';
import * as productsService from '@/services/productsService';
import * as productsCategoriesService from '@/services/productsCategoriesService';

import CardProduct from '@/components/CardProduct';
import Button from '@/components/Button';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cx = classNames.bind(styles);
const typeProduct = ['All', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

function Products({ children }) {
    const [products, setProducts] = useState([]);
    const [fillter, setFillter] = useState('All');
    const [loading, setLoading] = useState(false);
    let componentMouted = true;

    const handleGetType = (value) => {
        setFillter(value);
    };

    useEffect(() => {
        const getApiProducts = async () => {
            if (fillter === 'All') {
                setLoading(true);
                const response = await productsService.getAllProducts();

                if (componentMouted) {
                    setProducts(response);
                    setLoading(false);
                }
                return () => {
                    componentMouted = false;
                };
            } else {
                setLoading(true);
                const response = await productsCategoriesService.getCategoriesProducts({ categoies: fillter });

                if (componentMouted) {
                    setProducts(response);
                    setLoading(false);
                }
                return () => {
                    componentMouted = false;
                };
            }
        };
        getApiProducts();
    }, [fillter]);

    const Loading = () => {
        return (
            <div className={cx('loading')}>
                <div>
                    <Skeleton duration={3} height={100} />
                </div>
                <div>
                    <Skeleton duration={3} height={100} />
                </div>
                <div>
                    <Skeleton duration={3} height={100} />
                </div>
                <div>
                    <Skeleton duration={3} height={100} />
                </div>
            </div>
        );
    };

    return (
        <div className={cx('Product')}>
            <h2 className={cx('latest-products')}>LATEST PRODUCTS</h2>

            <div className={cx('button-type')}>
                {typeProduct.map((type, i) => {
                    return (
                        <Button
                            onClick={() => {
                                handleGetType(type);
                            }}
                            normal
                            key={i}
                            className={cx('button-type-item')}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Button>
                    );
                })}
            </div>
            <div className={cx('product-cards')}>
                {products.map((itemProduct, i) => {
                    return loading ? (
                        <Skeleton
                            key={i}
                            lineHeight={2}
                            padding="1rem"
                            count={5.5}
                            borderRadius={1}
                            highlightColor={'#333'}
                        />
                    ) : (
                        <CardProduct item={itemProduct} key={itemProduct.id} />
                    );
                })}
            </div>
        </div>
    );
}
Products.propTypes = {};

export default Products;
