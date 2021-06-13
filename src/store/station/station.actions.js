import StationActionTypes from './station.types';

export const setPlayingStation = (station) => ({
  type: StationActionTypes.SET_PLAYING_STATION,
  payload: station,
});
