import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import BannerBackground from "../../../src/assets/home-banner-background.png";
import BannerImage from "../../../src/assets/home-banner-image.png";
import { useNavigate } from 'react-router-dom';
import Modal from '../../../src/pages/Modal';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleRegistrate = () => {
    navigate("/regVol");
  };

  const handleIniciarSesion = () => {
    navigate("/userform");
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openPopup = () => {
    // Abre una ventana emergente con dos botones
    const popup = window.open("", "popup", "width=300,height=200");

    // HTML para los botones en la ventana emergente
    const popupContent = `
      <div>
        <button onclick="window.location.href='/donar'" style="margin-right: 10px;">QUIERO DONAR</button>
        <button onclick="window.location.href='/ser-voluntario'">QUIERO SER VOLUNTARIO</button>
      </div>
    `;

    // Inserta el HTML en la ventana emergente
    popup.document.body.innerHTML = popupContent;
  };

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

          <button className="secondary-button" onClick={handleRegistrate}>
            QUIERO AYUDAR
          </button>
          

          <button className="secondary-button" onClick={handleIniciarSesion}>
            INICIAR SESIÓN
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Home;

