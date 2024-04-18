import React  from 'react';
import { Link } from 'react-router-dom';
import '../styles/donationVolunPage.css';
const Modal = ({ showModal, closeModal }) => {
 
  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <div className="donation-volunteer-page">
                <div className="containerv">
                  <div className="buttons-containerv">
                    <Link to="/regdon" className="donate-button">
                      Donar
                    </Link>
                    <Link to="/regVol" className="volunteer-button">
                      Ser Voluntario
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;