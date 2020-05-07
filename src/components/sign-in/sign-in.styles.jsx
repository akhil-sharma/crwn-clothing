import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SignInTitle = styled.h1`
    margin: 10 px 0;
`;

export const SignInError = styled.span`
    color: red;
    margin: 10px, 0px;
`;