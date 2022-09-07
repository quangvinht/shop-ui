import { actionType } from '../constants/actionTypes';
import { Provider } from 'react-redux';

const initalState = {
    productCart: [],
    quantityCart: 0,
};

export const productReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_PRODUCTS_CART:
            const exist = state.productCart.find((product) => product.id === payload.id);
            //incrre quantity for each product in cart :
            if (exist) {
                return {
                    ...state,
                    productCart: state.productCart.map((product) =>
                        product.id === payload.id ? { ...product, quantity: product.quantity + 1 } : product,
                    ),
                };
            } else {
                return {
                    ...state,
                    productCart: [...state.productCart, payload],
                };
            }

        case actionType.REMOVE_PRODUCT_CART:
            const existToRemove = state.productCart.find((product) => product.id === payload.id);
            if (existToRemove.quantity === 1) {
                return {
                    ...state,
                    productCart: state.productCart.filter((product) => product.id !== payload.id),
                };
            } else {
                return {
                    ...state,
                    productCart: state.productCart.map((product) =>
                        product.id === payload.id ? { ...product, quantity: product.quantity - 1 } : product,
                    ),
                };
            }

        default:
            return state;
    }
};
