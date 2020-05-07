import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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

        if (password !== confirmPassword){
            alert("Passwords don't match.");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch(error){
            console.error(error);
        }
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

export default SignUp; 