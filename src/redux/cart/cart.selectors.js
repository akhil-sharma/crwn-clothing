import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems//cartItems.reduce((currentTotal, item) => currentTotal + item.quantity, 0)
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((currentTotal, item) => currentTotal + item.quantity, 0)
)