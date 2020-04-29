import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((currentTotal, item) => currentTotal + item.quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalCost, currentItem) => totalCost + (currentItem.price * currentItem.quantity), 0)
);