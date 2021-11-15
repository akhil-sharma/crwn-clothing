import { createSelector } from 'reselect';

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = (collectionUrlParams) => (
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParams] : []
    )
);

export const selectColectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);