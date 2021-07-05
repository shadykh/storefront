let initialState = {
    cart: [],
}


const cartReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART':
            let product = payload;
            return { cart: [...state.cart, product] };
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
export default cartReducer;