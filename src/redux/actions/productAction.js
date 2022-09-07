import { actionType } from '../constants/actionTypes';

export const setProductCart = (product) => {
    return {
        type: actionType.ADD_PRODUCTS_CART,
        payload: product,
    };
};

export const removeProductCart = (product) => {
    return {
        type: actionType.REMOVE_PRODUCT_CART,
        payload: product,
    };
};
