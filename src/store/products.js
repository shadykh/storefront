import axios from 'axios';

import { addToCart, removeFromCart } from './cart';


const API = 'https://shady-auth-api.herokuapp.com/api/v1/store';


let initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'GET_PRODS':
            return { products: payload };

        default:
            return state;
    }
}

export const getRemoteData = () => async dispatch => {
  let response = await axios.get(API);
  dispatch(getAction(response.data))
}

export const putRemoteData = (product, incrementor) => async dispatch => {

  let inventory = (await axios.get(`${API}/${product._id}`)).data.inventory;

  const update = { ...product, inventory: incrementor ? inventory - 1 : inventory + 1 }

  let response = await axios.put(`${API}/${product._id}`, update)

  console.log('inventory: ', response.data.inventory);

  if (response.status) {
    incrementor ? dispatch(addToCart(response.data)) : dispatch(removeFromCart(product));
    dispatch(getRemoteData());
  }
  
}

export const getAction = (data) => {
  return {
    type: 'GET_PRODS',
    payload: data
  }
}



export default productReducer;