import React from 'react';
import { connect } from 'react-redux';

import { 
    clearItemFromCart,
    removeItem,
    addItem
 } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
    
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}></img>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>

            <div className='remove-button' onClick={ () => clearItemFromCart(cartItem) }>
                    &#10005;
            </div>
        </div>
)};


const mapDispatchToProps = dispatch => ({
    clearItemFromCart: currentItem => dispatch(clearItemFromCart(currentItem)),
    removeItem: currentItem => dispatch(removeItem(currentItem)),
    addItem: currentItem => dispatch(addItem(currentItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);