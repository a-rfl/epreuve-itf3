import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';
import './_modal.scss';

const Modal = ({
  date, children, btnFunction, visible, contactNumber,
}) => (
  <div className={visible ? 'visible' : 'invisible'}>
    <div className="modal-overlay">
      <div className="modal">
        <h2>menu du <span>jour</span></h2>
        <h3>{date}</h3>
        <Btn label="X" classNames="btn-modal" func={btnFunction} />
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
  visible: PropTypes.bool,
  contactNumber: PropTypes.string,
};

Modal.defaultProps = {
  visible: false,
  contactNumber: '06 66 666 666',
};

export default Modal;
