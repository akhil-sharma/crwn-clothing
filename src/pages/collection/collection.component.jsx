import React from 'react';
import { connect } from 'react-redux';

import { selectShopDataSpecific } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({shopDataSpecific }) => {
    const {title, items} = shopDataSpecific;

    return (
    <div className='collection-page'>
        <h2 class='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    shopDataSpecific : selectShopDataSpecific(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);