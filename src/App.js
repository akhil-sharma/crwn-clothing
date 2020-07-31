import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render = {() => currentUser ? (<Redirect to='/' />): <SignInAndSignUp/>}/>
        <Route exact path='/checkout' component = {CheckoutPage}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession : () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
