import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopDataForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview = ({shopData}) => (
    <div className='collection-overview'>
        {shopData.map((data) => (
            <CollectionPreview key={data.id} title={data.title} items={data.items}/>
        ))}

    </div>
);

const mapStateToProps = createStructuredSelector({
    shopData: selectShopDataForPreview
});

export default connect(mapStateToProps)(CollectionOverview);