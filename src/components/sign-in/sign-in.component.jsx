import React from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>SignIn with your email and password.</span>
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

                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>

            </div>
        );
    }

}

export default SignIn;