import { combineReducers } from 'redux';
import productsReducer from './productosReducer';
import alertReducer from './alertaReducer';

export default combineReducers({
    products: productsReducer,
    alert: alertReducer
});