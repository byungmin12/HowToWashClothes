import { ModalInitialState, ClothesInitialState } from './initialState';
import { HANDLE_OPEN_CLOTHESMODAL, HANDLE_CLOSE_CLOTHESMODAL } from '../actions/ClotheModalActionIndex';

const ClothesModalReducer = (state = ModalInitialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case HANDLE_OPEN_CLOTHESMODAL:
      newState.isModalOpenClose = true;
      newState.ClothesData = ClothesInitialState.ClothesData.filter((el) => el.id === action.payload);
      return newState;

    case HANDLE_CLOSE_CLOTHESMODAL:
      newState.isModalOpenClose = false;
      return newState;

    default:
      return state;
  }
};

export default ClothesModalReducer;
