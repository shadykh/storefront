//This file is formatted by Prettier-Code formatter

/**
 *  Redux imports.
 */
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/**
 *  Reducers imports.
 */
import categoryReducer from "./categories";
import productReducer from "./products";
import cartReducer from "./cart";

/**
 *  Combine the Reducers.
 */
let reducers = combineReducers({
  categoryReducer,
  productReducer,
  cartReducer,
});

// export the combined Reducers
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

// export the store
export default store();
