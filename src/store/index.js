import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categories';
import productReducer from './products';

let reducers = combineReducers({ categoryReducer, productReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();