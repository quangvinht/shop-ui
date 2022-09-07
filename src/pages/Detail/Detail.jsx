import { useState, useEffect } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { useParams, useNavigate } from 'react-router-dom';
import * as anProductService from '@/services/anProductService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector, useDispatch } from 'react-redux';
import { setProductCart } from '@/redux/actions/productAction';

const cx = classNames.bind(styles);

export default function Detail() {
    const dispatch = useDispatch();

    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getApiProducts = async () => {
            setLoading(true);
            const result = await anProductService.getAnProduct({ id: id });
            setProduct(result);
            setRating(result.rating.rate);
            setLoading(false);
        };

        getApiProducts();
    }, []);

    const handleToCart = () => {
        navigate(`/cart`);
    };

    const Loading = () => {
        return (
            <div className={cx('loading-detail')}>
                <div>
                    <Skeleton width={500} height={500} lineHeight={2} borderRadius={1} highlightColor={'#333'} />
                </div>
                <div>
                    <Skeleton
                        style={{ marginBottom: '10px' }}
                        width={300}
                        height={25}
                        lineHeight={2}
                        borderRadius={1}
                        highlightColor={'#333'}
                    />
                    <Skeleton
                        style={{ marginBottom: '10px' }}
                        width={500}
                        height={20}
                        count={2}
                        borderRadius={1}
                        highlightColor={'#333'}
                    />
                    <Skeleton
                        style={{ marginBottom: '10px' }}
                        width={200}
                        height={50}
                        lineHeight={2}
                        borderRadius={1}
                        highlightColor={'#333'}
                    />
                    <Skeleton
                        style={{ marginBottom: '10px' }}
                        width={200}
                        height={50}
                        lineHeight={2}
                        borderRadius={1}
                        highlightColor={'#333'}
                    />
                    <Skeleton width={400} height={10} count={4.5} borderRadius={1} highlightColor={'#333'} />

                    <Skeleton width={400} height={50} count={1} borderRadius={1} highlightColor={'#333'} />
                </div>
            </div>
        );
    };
    const handleAddProductCart = () => {};

    return (
        <div className={cx('detail')}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <img src={product.image} alt={product.title} className={cx('image')} />
                    <div className={cx('detail-infor')}>
                        <h2 className={cx('category')}>{product.category}</h2>
                        <h1 className={cx('title')}>{product.title}</h1>
                        <strong className={cx('rating')}>
                            <span>Rating: {rating} </span>
                            <FontAwesomeIcon icon={faStar} />
                        </strong>
                        <strong className={cx('price')}> $ {product.price}</strong>
                        <div className={cx('description')}>{product.description}</div>
                        <div className={cx('detail-button')}>
                            <Button
                                sameSize
                                className={cx('btn-item')}
                                onClick={() => {
                                    dispatch(setProductCart({ ...product, quantity: 1 }));
                                }}
                            >
                                ADD TO CART
                            </Button>
                            <Button sameSize onClick={handleToCart}>
                                GO TO CART
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
