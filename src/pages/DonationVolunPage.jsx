import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/donationVolunPage.css'; // Ajusta la ruta según sea necesario

const DonationVolunPage = () => {
  return (
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
  );
};

export default DonationVolunPage;