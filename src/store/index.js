import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({ categoryReducer, productReducer, cartReducer  });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();