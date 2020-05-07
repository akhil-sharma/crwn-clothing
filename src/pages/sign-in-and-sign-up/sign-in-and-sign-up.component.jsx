import React from 'react';

import SigIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'; 

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SigIn className='sign-in'/>
        <SignUp className='sign-up'/>
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage;