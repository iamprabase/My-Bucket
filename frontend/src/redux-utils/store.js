import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailReducer,
  productListReducer,
} from './reducers/productReducers';

const rootReducers = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

const middlewares = [thunk];

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
