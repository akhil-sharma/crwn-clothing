import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles';

const SignUp = ({signUpStart}) => {

    const [userDetails, setUserDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    //const [signUpError, setError] = useState({error: null});

    const {displayName, email, password, confirmPassword} = userDetails;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword){
            alert("Passwords don't match.");
            return;
        }

        signUpStart({
            displayName, 
            email, 
            password
        });
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserDetails({...userDetails, [name]: value })
    }

    return(
        <SignUpContainer>
            <SignUpTitle>I do not have an account.</SignUpTitle>
            <span>Sign up with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Name"
                    name="displayName"
                    type="text"
                    onChange={handleChange}
                    value={displayName}
                    required/>
                
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                    required/>

                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={password}
                    required/>

                <FormInput
                    label="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={confirmPassword}
                    required/>

                <CustomButton type="submit">SIGN UP!</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (accountDetails) => dispatch(signUpStart(accountDetails))
});

export default connect(null, mapDispatchToProps)(SignUp); 