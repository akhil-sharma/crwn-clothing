import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//note: payload is an optional property

export const addItem = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
});