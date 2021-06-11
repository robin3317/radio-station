import { useState } from 'react';
import Station from '../Station/Station';
import ControlPanel from './ControlPanel';
import DB from '../../DB.json';
import BackArrow from '../../assets/back-arrow.png';
import Switch from '../../assets/switch.png';
import styles from './Stations.module.scss';

const Stations = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [channelName, setChannelName] = useState(null);

  const handleCurrentPlaying = ({ id, channelName }) => {
    setCurrentPlaying(id);
    setChannelName(channelName);
  };

  const handleBackClick = () => {
    // TODO: implement later
  };

  const handlePowerClick = () => {
    // TODO: implement later
  };

  return (
    <div className={styles.stations}>
      {/* start header container */}
      <div className={styles.headerContainer}>
        <img
          className={styles.backBtn}
          src={BackArrow}
          alt="Go Back"
          onClick={handleBackClick}
        />
        <h1 className={styles.title}>Stations</h1>
        <img
          className={styles.powerBtn}
          src={Switch}
          alt="Power"
          onClick={handlePowerClick}
        />
      </div>
      {/* end header container */}

      {/* start stations container */}
      <div className={styles.stationsContainer}>
        {DB.data &&
          DB.data.map((station) => (
            <div key={station.id} className={styles.stationWrapper}>
              {station.id === currentPlaying ? <ControlPanel /> : null}
              <Station
                stationInfo={station}
                handleCurrentPlaying={handleCurrentPlaying}
              />
            </div>
          ))}
      </div>
      {/* end stations container */}

      {/* start footer container */}
      <div className={styles.footerContainer}>
        {channelName ? (
          <>
            <p className={styles.title}>Currently Playing</p>
            <p>{channelName}</p>
          </>
        ) : null}
      </div>
      {/* end footer container */}
    </div>
  );
};

export default Stations;
