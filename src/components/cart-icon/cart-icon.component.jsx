import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'

import {
    CartIconContanier,
    ItemCount
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContanier onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
        <ItemCount>
            {itemCount}
        </ItemCount>
        </CartIconContanier>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps  = createStructuredSelector ({
    itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 
