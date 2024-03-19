import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../../../src/assets/home-banner-background.png";
import BannerImage from "../../../src/assets/home-banner-image.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Únete en la lucha contra el hambre
          </h1>
          <h1 className="primary-heading-green">
            ¡Súmate como voluntario hoy mismo!
          </h1>
          <p className="primary-text">
            Cada acción cuenta
          </p>
          <button className="secondary-button">
            Regístrate <FiArrowRight />
          </button>
          {/* Botón LOGIN */}
          <Link to="/userform" className="secondary-button">
            LOGIN
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
