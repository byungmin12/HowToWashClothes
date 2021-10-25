export const HANDLE_SEARCH_CLOTHES = 'HANDLE_SEARCH_CLOTHES';

export const handleSearchClothes = (filterData, check) => {
  return {
    type: HANDLE_SEARCH_CLOTHES,
    payload: filterData,
    payCheck: check,
  };
};
