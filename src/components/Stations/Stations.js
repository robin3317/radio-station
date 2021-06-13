import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Station from '../Station/Station';
import ControlPanel from './ControlPanel';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder';
import {
  setPlayingStation,
  setStationList,
} from '../../store/station/station.actions';
import DB from '../../DB.json';
import styles from './Stations.module.scss';

const Stations = () => {
  const dispatch = useDispatch();

  const { playingStation } = useSelector((state) => state.station);
  const { stationList } = useSelector((state) => state.station);

  const handleCurrentPlaying = ({ id, channelName }) => {
    dispatch(setPlayingStation({ id, channelName }));
  };

  // TODO: this will change later, need to fetch data from backend
  useEffect(() => {
    dispatch(setStationList(DB.data));
  }, [dispatch]);

  return (
    <div className={styles.stations}>
      <Header />

      <div className={styles.stationsContainer}>
        {stationList && stationList.length > 0 ? (
          stationList.map((station) => (
            <div key={station.id} className={styles.stationWrapper}>
              {playingStation && station.id === playingStation.id ? (
                <ControlPanel />
              ) : null}
              <Station
                stationInfo={station}
                handleCurrentPlaying={handleCurrentPlaying}
              />
            </div>
          ))
        ) : (
          <div className={styles.emptyPlaceholder}>
            {/* 
            Eventually we can show a loading message(if data is fetching) 
            or show the empty placeholder(if nothing found) 
            */}
            <EmptyPlaceholder
              message="No radio station found!"
              styles={{ textTransform: 'uppercase', fontSize: '2.5rem' }}
            />
          </div>
        )}
      </div>

      <Footer channelName={playingStation && playingStation.channelName} />
    </div>
  );
};

export default Stations;
