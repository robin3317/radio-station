import Minus from '../../assets/minus.png';
import Plus from '../../assets/plus.png';
import Clip from '../../assets/clip.png';
import styles from './ControlPanel.module.scss';

const ControlPanel = () => {
  const handleMinus = () => {
    // TODO: implement later
  };

  const handlePlus = () => {
    // TODO: implement later
  };

  return (
    <div className={styles.controlContainer}>
      <img
        className={styles.minus}
        src={Minus}
        alt="Minus"
        onClick={handleMinus}
      />
      <img className={styles.clipImg} src={Clip} alt="Clip" />
      <img className={styles.plus} src={Plus} alt="Plus" onClick={handlePlus} />
    </div>
  );
};

export default ControlPanel;
