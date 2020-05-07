import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyCartMessage
} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, match, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? 
                cartItems.map((item) => (
                    <CartItem key={ item.id } item={item}/>
                ))
                :
                <EmptyCartMessage>Your cart is empty!</EmptyCartMessage>
            }
        </CartItemsContainer>
        <CustomButton onClick={()=> {
            history.push(`${match.url}checkout`);
            dispatch(toggleCartHidden())
            }}> GO TO CHECKOUT </CustomButton>
    </CartDropdownContainer>
);

const matchStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(matchStateToProps)(CartDropdown)); 