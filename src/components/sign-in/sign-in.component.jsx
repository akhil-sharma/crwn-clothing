import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
    googleSignInStart, 
    emailSignInStart 
} from '../../redux/user/user.actions';

import {
    SignInContainer,
    ButtonsContainer,
    SignInTitle,
    SignInError
} from './sign-in.styles';


const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const [signInError, setError] = useState({error: null});

    const {email, password} = userCredentials;
    const {error} = signInError;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart({
            email,
            password
        });
    }
    
    const handleChange = event => {
        const { value, name } = event.target;
    
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account.</SignInTitle>
            <span>SignIn with your email and password.</span>
            {
                error ? 
                <SignInError>{ error }</SignInError> :
                null
            }
            
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    name="email" 
                    value={email} 
                    type="email"
                    handleChange={handleChange} 
                    required/>
                
                <FormInput 
                    label="Password"
                    name="password" 
                    value={password} 
                    type="password" 
                    handleChange={handleChange}
                    required/>
                <ButtonsContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </ButtonsContainer>
            </form>

        </SignInContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);