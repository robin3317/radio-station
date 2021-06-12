import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Station from '../Station/Station';
import ControlPanel from './ControlPanel';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder';
import DB from '../../DB.json';
import styles from './Stations.module.scss';

const Stations = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [channelName, setChannelName] = useState(null);

  const handleCurrentPlaying = ({ id, channelName }) => {
    setCurrentPlaying(id);
    setChannelName(channelName);
  };

  return (
    <div className={styles.stations}>
      <Header />

      <div className={styles.stationsContainer}>
        {DB.data && DB.data.length > 0 ? (
          DB.data.map((station) => (
            <div key={station.id} className={styles.stationWrapper}>
              {station.id === currentPlaying ? <ControlPanel /> : null}
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

      <Footer channelName={channelName} />
    </div>
  );
};

export default Stations;
