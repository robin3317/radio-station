import PropTypes from 'prop-types';

const EmptyPlaceholder = ({ message = 'Found nothing to show!', styles }) => (
  <p style={{ ...styles }}>{message}</p>
);

EmptyPlaceholder.propTypes = {
  message: PropTypes.string,
  styles: PropTypes.object,
};

export default EmptyPlaceholder;
