import StationActionTypes from './station.types';

export const setPlayingStation = (station) => ({
  type: StationActionTypes.SET_PLAYING_STATION,
  payload: station,
});

export const setStationList = (stations) => ({
  type: StationActionTypes.SET_STATION_LIST,
  payload: stations,
});
