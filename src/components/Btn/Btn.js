import PropTypes from 'prop-types';

const Btn = ({ func, label, classNames }) => (
  <button type="button" className={`btn ${classNames}`} onClick={func}>
    {label}
  </button>
);

// Props type validation
Btn.propTypes = {
  func: PropTypes.func.isRequired,
  label: PropTypes.string,
  classNames: PropTypes.string,
};

Btn.defaultProps = {
  label: 'Cliquez ici',
  classNames: '',
};

export default Btn;
