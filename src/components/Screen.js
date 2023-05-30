import PropTypes from 'prop-types';
import screen from '../styles/Screen.module.css';

const Screen = ({ total, next, operation }) => (
  <div className={screen.screen}>{`${total}${operation}${next}`}</div>
);

export default Screen;

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
