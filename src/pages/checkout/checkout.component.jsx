import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartPrice
} from '../../redux/cart/cart.selectors';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TextContainer,
  TestWarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TextContainer>TOTAL: ${total}</TextContainer>

    {
      (cartItems.length === 0) ? null :
      <>
        <TestWarningContainer>
          *Please use the following test credit card credentials for payment*
          <br/>
          4242 4242 4242 4242 - EXP: 01/23 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total}/>
      </>
    }

  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartPrice
});

export default connect(mapStateToProps)(CheckoutPage);
