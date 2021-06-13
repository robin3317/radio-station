import StationActionTypes from './station.types';

const INITIAL_STATE = {
  playingStation: null,
  stationList: null,
};

const stationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StationActionTypes.SET_PLAYING_STATION:
      return {
        ...state,
        playingStation: action.payload,
      };
    case StationActionTypes.SET_STATION_LIST:
      return {
        ...state,
        stationList: action.payload,
      };
    default:
      return state;
  }
};

export default stationReducer;
