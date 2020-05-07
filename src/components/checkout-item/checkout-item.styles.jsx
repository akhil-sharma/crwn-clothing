import styled from 'styled-components';

const baseWidth =  '23%';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ItemImageContainer = styled.div`
    width: ${baseWidth};
    padding-right: 15px;
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
`;

export const QuantityContainer = styled.span`
    width: ${baseWidth};
    display: flex;

    div {
        cursor: pointer;
    }

    span {
        margin: 0 10px;
    }
`;

export const TextContainer = styled.span`
    width: ${baseWidth};
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;