import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({ categoryReducer, productReducer, cartReducer  });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();