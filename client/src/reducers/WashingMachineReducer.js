import { ClothesInitialState } from './initialState';
import { HANDLE_OPEN_CLOSE_WASHINGMACHINE } from '../actions/WashingMachineActionIndex';

const WashingMachineReducer = (state = ClothesInitialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case HANDLE_OPEN_CLOSE_WASHINGMACHINE:
      newState.isOpenClose = action.payload;
      return newState;

    default:
      return state;
  }
};

export default WashingMachineReducer;
