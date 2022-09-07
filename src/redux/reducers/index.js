import { combineReducers } from 'redux';
import { productReducer } from './productReducer.js';

const reducers = combineReducers({
    allProducts: productReducer,
});
export default reducers;
