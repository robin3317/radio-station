import PropTypes from 'prop-types';
import styles from './Station.module.scss';

const Station = ({ stationInfo, handleCurrentPlaying }) => {
  return (
    <div
      className={styles.station}
      onClick={() => handleCurrentPlaying(stationInfo)}
    >
      <p>{stationInfo.channelName}</p>
      <p>{stationInfo.frequency}</p>
    </div>
  );
};

Station.propTypes = {
  stationInfo: PropTypes.object,
  handleCurrentPlaying: PropTypes.func,
};

export default Station;
