import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    CollectionName,
    CollectionPrice
} from './collection-item.styles';


const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return (
        <CollectionItemContainer>
            <ImageContainer
                imageUrl={imageUrl}
                className='image'
            />

            <CollectionFooterContainer>
                <CollectionName> {name} </CollectionName>
                <CollectionPrice> ${price} </CollectionPrice>    
            </CollectionFooterContainer>
            <CustomButton className='custom-button' inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>      
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);