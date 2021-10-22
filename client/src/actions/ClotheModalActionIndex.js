export const HANDLE_OPEN_CLOTHESMODAL = 'HANDLE_OPEN_CLOTHESMODAL';
export const HANDLE_CLOSE_CLOTHESMODAL = 'HANDLE_CLOSE_CLOTHESMODAL';

export const handleOpenClothesModal = (item) => {
  console.log(item);
  return {
    type: HANDLE_OPEN_CLOTHESMODAL,
    payload: item,
  };
};

export const handleCloseClothesModal = () => {
  return {
    type: HANDLE_CLOSE_CLOTHESMODAL,
  };
};
