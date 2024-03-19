import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import '../styles/estilosOrgReg.css'; //
//ORGANIZACION
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    belongsToOrganization: false,
    organizationName: '',
    address: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', formData);
      // Manejar respuesta exitosa
    } catch (error) {
      // Manejar error
    }
  };

  const handleCancel = () => {
    // Implementar lógica para cancelar el registro
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      {/* Renderizar los campos del formulario */}
      <h2>Registrate organización</h2>
      <InputField
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Nombre completo"
      />
      <InputField
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
      />
      <InputField
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Contraseña"
      />
      <InputField
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirmar contraseña"
      />
      <InputField
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        placeholder="Fecha de nacimiento"
      />
      <CheckboxField
        name="belongsToOrganization"
        value={formData.belongsToOrganization}
        onChange={handleCheckboxChange}
        label="¿Pertenece a una organización benéfica?"
      />
      {formData.belongsToOrganization && (
        <>
          <InputField
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Nombre de la organización"
          />
          <InputField
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Dirección"
          />
        </>
      )}
      <CheckboxField
        name="termsAccepted"
        value={formData.termsAccepted}
        onChange={handleCheckboxChange}
        label="Aceptar términos y condiciones del servicio"
      />
      {/* Agregar botones de cancelar y registrarme */}
      <div>
        <button type="button" onClick={handleCancel}>Cancelar</button>
        <button type="submit">Registrarme</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
