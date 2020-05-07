import React from 'react';
import { connect } from 'react-redux';

import { 
    clearItemFromCart,
    removeItem,
    addItem
 } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ItemImageContainer,
    ImageContainer,
    RemoveButtonContainer,
    QuantityContainer,
    TextContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
    
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <CheckoutItemContainer>
            <ItemImageContainer>
                <ImageContainer alt='item' src={imageUrl}></ImageContainer>
            </ItemImageContainer>

            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div  onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>

            <RemoveButtonContainer onClick={ () => clearItemFromCart(cartItem) }>
                    &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
)};


const mapDispatchToProps = dispatch => ({
    clearItemFromCart: currentItem => dispatch(clearItemFromCart(currentItem)),
    removeItem: currentItem => dispatch(removeItem(currentItem)),
    addItem: currentItem => dispatch(addItem(currentItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);