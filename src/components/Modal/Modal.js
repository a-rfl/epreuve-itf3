import PropTypes from 'prop-types';
import './_modal.scss';

const Modal = ({
  contentModal, btnFunction, visibile, contactNumber,
}) => (
  <div className={visibile ? 'visible' : 'invisible'}>
    <div className="modal-overlay">
      <div className="modal">
        <h2>menu du <span>jour</span></h2>
        <button className="btn-modal" type="button" onClick={btnFunction}>
          X
        </button>
        <p>
          {contentModal}
        </p>
        <p className="command-text">Pour commander, contacter le chef Pablo par Whatsapp : <span>{contactNumber}</span></p>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  contentModal: PropTypes.string,
  btnFunction: PropTypes.func.isRequired,
  visibile: PropTypes.bool,
  contactNumber: PropTypes.string,
};

Modal.defaultProps = {
  contentModal: 'Ceci est le texte d\'une modale. ',
  visibile: false,
  contactNumber: '06 66 666 666',
};

export default Modal;
