let initialState = {
    cart: [],
}


const cartReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART':
            let product = payload;
            return { cart: [...state.cart, product] };
        case 'REMOVE_FROM_CART':
            let removeProduct = payload;
            return { cart: state.cart.filter(item => item !== removeProduct) }

        case 'CART_RESET':
            return initialState;

        default:
            return state;
    }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}
export default cartReducer;