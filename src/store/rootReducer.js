import { combineReducers } from 'redux';
import stationReducer from './station/station.reducer';

export const rootReducer = combineReducers({
  station: stationReducer,
});
