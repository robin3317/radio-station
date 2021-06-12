import BackArrow from '../../assets/back-arrow.png';
import Switch from '../../assets/switch.png';
import styles from './Header.module.scss';

const Header = () => {
  const handleBackClick = () => {
    // TODO: implement later
  };

  const handlePowerClick = () => {
    // TODO: implement later
  };

  return (
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
  );
};

export default Header;
