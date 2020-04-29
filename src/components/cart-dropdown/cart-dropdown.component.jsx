import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, match, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map((item) => (
                    <CartItem key={ item.id } item={item}/>
                ))
                :
                <span className='empty-message'>Your cart is empty!</span>
            }
        </div>
        <CustomButton onClick={()=> {
            history.push(`${match.url}checkout`);
            dispatch(toggleCartHidden())
            }}> GO TO CHECKOUT </CustomButton>
    </div>
);

const matchStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(matchStateToProps)(CartDropdown)); 