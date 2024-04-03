import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/formularioSolicitud.css'; // Importa estilos únicos para este formulario

const SolicitudAlimentoForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    correo: '',
    telefono: '',
    tipoAlimento: '',
    cantidad: 1,
    motivoSolicitud: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCantidadChange = (action) => {
    if (action === 'increment') {
      setFormData(prevState => ({
        ...prevState,
        cantidad: prevState.cantidad + 1
      }));
    } else if (action === 'decrement' && formData.cantidad > 1) {
      setFormData(prevState => ({
        ...prevState,
        cantidad: prevState.cantidad - 1
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/solicitud-alimento', formData);
      navigate('/success');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="solicitud-alimento-container">
      <h2 className="form-title">Solicitud de Alimento</h2>
      <form onSubmit={handleSubmit} className="solicitud-alimento-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="tipoAlimento">Tipo de Alimento:</label>
          <select id="tipoAlimento" name="tipoAlimento" value={formData.tipoAlimento} onChange={handleChange} required>
            <option value="">Selecciona una opción</option>
            <option value="Frutas">Frutas</option>
            <option value="Verduras">Verduras</option>
            <option value="Carnes">Carnes</option>
            <option value="Pescados">Pescados</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="form-group cantidad-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <div className="cantidad-container">
            <button type="button" className="cantidad-button" onClick={() => handleCantidadChange('decrement')}>-</button>
            <span>{formData.cantidad}</span>
            <button type="button" className="cantidad-button" onClick={() => handleCantidadChange('increment')}>+</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="motivoSolicitud">Motivo de Solicitud:</label>
          <textarea id="motivoSolicitud" name="motivoSolicitud" value={formData.motivoSolicitud} onChange={handleChange} required />
        </div>
        <div className='sep'>
        <button type="button" className="cancel-button" onClick={handleCancel}>Cancelar</button>
        <button type="submit" className="submit-button">Enviar Solicitud</button>
        </div>
      </form>
    </div>
  );
};

export default SolicitudAlimentoForm;
