import { useState, useEffect } from 'react';
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
  const [stationList, setStationList] = useState(null);

  const handleCurrentPlaying = ({ id, channelName }) => {
    setCurrentPlaying(id);
    setChannelName(channelName);
  };

  // TODO: this will change later, need to fetch data from backend
  useEffect(() => {
    setStationList(DB.data);
  }, []);

  return (
    <div className={styles.stations}>
      <Header />

      <div className={styles.stationsContainer}>
        {stationList && stationList.length > 0 ? (
          stationList.map((station) => (
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

      <Footer channelName={channelName} />
    </div>
  );
};

export default Stations;
