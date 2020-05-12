import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        const { signUpStart } = this.props;

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

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account.</SignUpTitle>
                <span>Sign up with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Name"
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={displayName}
                        required/>
                    
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        required/>

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        required/>

                    <FormInput
                        label="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={this.handleChange}
                        value={confirmPassword}
                        required/>

                    <CustomButton type="submit">SIGN UP!</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (accountDetails) => dispatch(signUpStart(accountDetails))
});

export default connect(null, mapDispatchToProps)(SignUp); 