//Adding a new item or incrementing the the quantity of an existing item
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToAdd.id;
    });

    if(existingCartItem){
        return cartItems.map(cartItem => 
          cartItem.id === cartItemToAdd.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1}
          : cartItem  
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};

//Clearing the entire item from cart irrespective of the quantity
export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    let updatedCart = cartItems.filter((currentCartItem) => currentCartItem.id !== cartItemToRemove.id);

    return [...updatedCart];
};

//Decrementing the quantity of an item if quantity is greater than 1 else removing it.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    let existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToRemove.id;
    });

    if(existingCartItem && existingCartItem.quantity > 1){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity -= 1} 
            : cartItem
            );
    }

    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
}