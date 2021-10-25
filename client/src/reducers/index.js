import { combineReducers } from 'redux';
import WashingMachineReducer from './WashingMachineReducer';
import ClothesModalReducer from './ClothesModalReducer';
import OpenCloseReducer from './OpenCloseReducer';

const rootReducer = combineReducers({
  WashingMachineReducer,
  ClothesModalReducer,
  OpenCloseReducer,
});

export default rootReducer;
