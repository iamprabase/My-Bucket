import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer} from './reducers/productReducers'

const rootReducers = combineReducers({
  productList: productListReducer,
});

const middlewares = [thunk]

const initialState = {}

const store = createStore(
              rootReducers, 
              initialState, 
              composeWithDevTools(applyMiddleware(...middlewares))
              )

export default store