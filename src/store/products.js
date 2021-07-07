//This file is formatted by Prettier-Code formatter

// axios to make http requests
import axios from "axios";

// import addToCart, removeFromCart functionality to the productReducer
import { addToCart, removeFromCart } from "./cart";

// API from where we got the data for the products
const API = "https://shady-auth-api.herokuapp.com/api/v1/store";

// the initial state
let initialState = {
  products: [],
};

/**
 *  productReducer reducer.
 */

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET_PRODS":
      return { products: payload };

    default:
      return state;
  }
};

// export the getRemoteData functionality
export const getRemoteData = () => async (dispatch) => {
  let response = await axios.get(API);
  dispatch(getAction(response.data));
};

// export the putRemoteData functionality
export const putRemoteData = (product, incrementor) => async (dispatch) => {
  let inventory = (await axios.get(`${API}/${product._id}`)).data.inventory;

  const update = {
    ...product,
    inventory: incrementor ? inventory - 1 : inventory + 1,
  };

  let response = await axios.put(`${API}/${product._id}`, update);

  console.log("inventory: ", response.data.inventory);

  if (response.status) {
    incrementor
      ? dispatch(addToCart(response.data))
      : dispatch(removeFromCart(product));
    dispatch(getRemoteData());
  }
};

// export the getAction functionality
export const getAction = (data) => {
  return {
    type: "GET_PRODS",
    payload: data,
  };
};

// export the productReducer reducer
export default productReducer;
