import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailReducer,
  productListReducer,
} from './reducers/productReducers';
import {cartReducers} from './reducers/cartReducers'

const rootReducers = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducers
});

const middlewares = [thunk];

const localStoredItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
  cart: {"cartItems": localStoredItems}
};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
