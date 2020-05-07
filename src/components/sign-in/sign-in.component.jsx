import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    ButtonsContainer,
    SignInTitle,
    SignInError
} from './sign-in.styles'

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

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email : "",
                password : ""
            })
        }catch(error){
            console.error(error);
            this.setState({error: "Invalid username or password."})
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsContainer>
                </form>

            </SignInContainer>
        );
    }

}

export default SignIn;