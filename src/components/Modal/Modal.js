import PropTypes from 'prop-types';
import './_modal.scss';

const Modal = ({
  date, children, btnFunction, visibile, contactNumber,
}) => (
  <div className={visibile ? 'visible' : 'invisible'}>
    <div className="modal-overlay">
      <div className="modal">
        <h2>menu du <span>jour</span></h2>
        <h3>{date}</h3>
        <button className="btn-modal" type="button" onClick={btnFunction}>
          X
        </button>
        <p>
          {children}
        </p>
        <p className="command-text">Pour commander via Whatsapp : <span>{contactNumber}</span></p>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  btnFunction: PropTypes.func.isRequired,
  visibile: PropTypes.bool,
  contactNumber: PropTypes.string,
};

Modal.defaultProps = {
  visibile: false,
  contactNumber: '06 66 666 666',
};

export default Modal;
