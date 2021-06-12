import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = ({ channelName }) => (
  <div className={styles.footerContainer}>
    {channelName ? (
      <>
        <p className={styles.title}>Currently Playing</p>
        <p>{channelName}</p>
      </>
    ) : null}
  </div>
);

Footer.propTypes = {
  channelName: PropTypes.string,
};

export default Footer;
