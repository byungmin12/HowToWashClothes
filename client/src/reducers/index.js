import { combineReducers } from 'redux';
import WashingMachineReducer from './WashingMachineReducer';
import ClothesModalReducer from './ClothesModalReducer';

const rootReducer = combineReducers({
  WashingMachineReducer,
  ClothesModalReducer,
});

export default rootReducer;
