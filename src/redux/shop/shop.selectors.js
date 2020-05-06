import { createSelector } from 'reselect';

const selectShop = state => state.shop

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopDataSpecific = (shopDataUrlParams) => (
    createSelector(
        [selectShopData],
        collections => collections ? collections[shopDataUrlParams] : []
    )
);

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    collections => collections ? Object.values(collections) : null
);


