import { createSelector } from 'reselect';

const selectShop = state => state.shop

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
);

export const selectShopDataSpecific = (shopDataUrlParams) => (
    createSelector(
        [selectShopData],
        shopData => shopData[shopDataUrlParams]
    )
);

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shopData => Object.values(shopData)
);


