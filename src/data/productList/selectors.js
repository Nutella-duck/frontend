export const selectProductList = (state) => state.productList.filteredList;

export const selectCatoryFilter = (state) => state.productList.filter.category;

export const selectSortFilter = (state) => state.productList.filter.sortBy;

export const selectpriceRangeFilter = (state) => state.productList.filter.priceRange;
