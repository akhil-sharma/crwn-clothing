import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectColectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionOverviewContainer } from './collection-overview.styles';
const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map((collection) => (
            <CollectionPreview 
                key={collection.id} 
                title={collection.title} 
                items={collection.items} 
                routeName={collection.routeName}
            />
        ))}

    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectColectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
