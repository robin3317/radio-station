import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Station from '../Station/Station';
import ControlPanel from './ControlPanel';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder';
import { setPlayingStation } from '../../store/station/station.actions';
import DB from '../../DB.json';
import styles from './Stations.module.scss';

const Stations = () => {
  const dispatch = useDispatch();

  const { playingStation } = useSelector((state) => state.station);

  const handleCurrentPlaying = ({ id, channelName }) => {
    dispatch(setPlayingStation({ id, channelName }));
  };

  return (
    <div className={styles.stations}>
      <Header />

      <div className={styles.stationsContainer}>
        {DB.data && DB.data.length > 0 ? (
          DB.data.map((station) => (
            <div key={station.id} className={styles.stationWrapper}>
              {station.id === playingStation.id ? <ControlPanel /> : null}
              <Station
                stationInfo={station}
                handleCurrentPlaying={handleCurrentPlaying}
              />
            </div>
          ))
        ) : (
          <div className={styles.emptyPlaceholder}>
            <EmptyPlaceholder
              message="No radio station found!"
              styles={{ textTransform: 'uppercase', fontSize: '2.5rem' }}
            />
          </div>
        )}
      </div>

      <Footer channelName={playingStation.channelName} />
    </div>
  );
};

export default Stations;
