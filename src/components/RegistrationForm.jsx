import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/estilosOrgReg.css';
import registrationImage from '../images/casaorg.png';
import { validarPass } from "../functions/validarPassword";
import { PasswordRForm } from "./PasswordRForm";
import { registrarUsuario } from "../api/registro.api";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [valido, setValido] = useState(true);

  const [correoValido, setCorreoValido] = useState(true);
  const handleCancel = () => {
    navigate('/');
  };

  const password = watch("Contraseña", "");

  const onSubmit = handleSubmit(async (data) => {
    setCorreoValido(true);
    const temp = validarPass(data.Contraseña);
    setValido(temp);
   
    if (temp && data.ContraseñaRepetida === data.Contraseña) {
      data.Rol = data.Rol[0];
      try {
        await registrarUsuario(data);
        navigate("/contactos");
      } catch (err) {
        console.log(err);
        if (err.response.data.Correo) {
          setCorreoValido(false);
        }
      }
    }
  });

  return (
    <div className="registration-containerRegOrg">
      <div className="form-containerRegOrg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="h2RegOrg" >Regístrate organización:</h2>
          <div className="campoUser">
            <input className="entradaDatos1" type="text"{...register("fullName", { required: "El nombre completo es obligatorio" })} placeholder="Nombre completo" />
            {errors.fullName && <p className="campoInvalido">{errors.fullName.message}</p>}
          </div>
          <div className="campoUser">
          <input className="entradaDatos1" type="email" {...register("email", { required: "El correo electrónico es obligatorio", pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder="Correo electrónico" />
          {errors.email && <p className="campoInvalido">{errors.email.message}</p>}
          {!correoValido && <p className="campoInvalido">El correo ya está en uso</p>}
          </div>
          <PasswordRForm
            pass={register("Contraseña", { required: "La contraseña es obligatoria", maxLength: { value: 45, message: "La contraseña no puede tener más de 45 caracteres" } })}
            confirmPass={register("ContraseñaRepetida", { required: "Debes repetir la contraseña", validate: (value) => value === password || "Las contraseñas no coinciden" })}
          />
          {errors.Contraseña && <p className="campoInvalido">{errors.Contraseña.message}</p>}
          {!valido && (
            <p className="campoInvalido">
              Contraseña inválida.
              <br />Debe tener mínimo:
              <br />1 número
              <br />1 minúscula
              <br />1 mayúscula
              <br />1 carácter especial
              <br />8 caracteres.
            </p>
          )}
          <div className="campoUser">
          <label className="labelRegistro">Fecha de creación: </label>
          <input className="entradaDatos1" type="date" {...register("dateOfBirth", { required: "La fecha de nacimiento es obligatoria" })} placeholder="Fecha de nacimiento" />
          {errors.dateOfBirth && <p className="campoInvalido">{errors.dateOfBirth.message}</p>}
          </div>
        
          <label>
            <input type="checkbox" class="custom-checkbox" {...register("belongsToOrganization")} />
            ¿Pertenece a una organización benéfica?
          </label>
          <div className="campoUser">
              <input className="entradaDatos1" type="text"{...register("organizationName", { required: "El nombre de la organización es obligatorio" })} placeholder="Nombre de organización" />
              {errors.organizationName && <p className="campoInvalido">{errors.organizationName.message}</p>}
              </div>
              <div className="campoUser">
              <input className="entradaDatos1" type="text"{...register("address", { required: "La dirección es obligatoria" })} placeholder="Dirección" />
              {errors.address && <p className="campoInvalido">{errors.address.message}</p>}
              </div>
          
          <label className='boton' >
            <input type="checkbox" class="custom-checkbox" {...register("termsAccepted", { required: "Debe aceptar los términos y condiciones" })} />
            Aceptar términos y condiciones del servicio
          </label>
          {errors.termsAccepted && <p className="campoInvalido">Debe aceptar los términos y condiciones</p>}
          <div className="button-container">
            <button type="button" onClick={handleCancel} className="cancel-button">
              Cancelar
            </button>
            <button type="submit" className="register-button">Registrarme</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={registrationImage} alt="Registration" className="registration-imageRegOrg" />
      </div>
    </div>
  );
};

export default RegistrationForm;




