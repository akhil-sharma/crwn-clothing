import React from 'react';
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

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            error: null
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {email, password} = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart({
            email,
            password
        });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        const { googleSignInStart } = this.props;

        return (
            <SignInContainer>
                <SignInTitle>I already have an account.</SignInTitle>
                <span>SignIn with your email and password.</span>
                {
                    this.state.error ? 
                    <SignInError>{ this.state.error }</SignInError> :
                    null
                }
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label="Email"
                        name="email" 
                        value={this.state.email} 
                        type="email"
                        handleChange={this.handleChange} 
                        required/>
                    
                    <FormInput 
                        label="Password"
                        name="password" 
                        value={this.state.password} 
                        type="password" 
                        handleChange={this.handleChange}
                        required/>
                    <ButtonsContainer>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsContainer>
                </form>

            </SignInContainer>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);