import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/estilosVolReg.css';
import registrationImage from '../images/volunt.png';
import { validarPass } from "../functions/validarPassword";

const RegisterVolun = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [correoValido, setCorreoValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);

  const password = watch("password", "");
  const disponibilidadSemana = watch("disponibilidadSemana", []);

  const onSubmit = async (data) => {
    setCorreoValido(true);
    const temp = validarPass(data.password);
    setPasswordValido(temp);

    if (!temp) {
      return; // Si la contraseña no es válida, detener la ejecución aquí.
    }

    if (data.password !== data.confirmPassword) {
      // Manejar la no coincidencia de contraseñas aquí, si es necesario.
      return;
    }

    try {
      await axios.post('/api/register', data);
      navigate("/success"); // Cambiar a la ruta deseada después del registro exitoso
    } catch (error) {
      console.log(error);
      if (error.response?.data?.email) {
        setCorreoValido(false);
      }
      // Manejar otros errores
    }
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Registrate Voluntario:</h2>
          <div className="campoUser">
            <input type="text" {...register("fullName", { required: "El nombre completo es obligatorio" })} placeholder="Nombre completo" />
            {errors.fullName && <p className="campoInvalido">{errors.fullName.message}</p>}
          </div>
          <div className="campoUser">
            <input type="email" {...register("email", { required: "El correo electrónico es obligatorio", pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder="Correo electrónico" />
            {errors.email && <p className="campoInvalido">{errors.email.message}</p>}
            {!correoValido && <p className="campoInvalido">El correo ya está en uso</p>}
          </div>
          <div className="campoUser">
            <input type="password" {...register("password", { required: "La contraseña es obligatoria" })} placeholder="Contraseña" />
            {errors.password && <p className="campoInvalido">{errors.password.message}</p>}
            {!passwordValido && (
              <p className="campoInvalido">
                Contraseña inválida. Debe contener al menos 1 número, 1 mayúscula, 1 minúscula, 1 carácter especial y tener 8 caracteres.
              </p>
            )}
          </div>
          <div className="campoUser">
            <input type="password" {...register("confirmPassword", { required: "Debes confirmar la contraseña" })} placeholder="Confirmar Contraseña" />
            {errors.confirmPassword && <p className="campoInvalido">{errors.confirmPassword.message}</p>}
          </div>
          <div className="campoUser">
            <label className="labelRegistro">Fecha de Nacimiento: </label>
            <input type="date" {...register("dateOfBirth", { required: "La fecha de nacimiento es obligatoria" })} placeholder="Fecha de nacimiento" />
            {errors.dateOfBirth && <p className="campoInvalido">{errors.dateOfBirth.message}</p>}
          </div>
          <div className="campoUser">
            <input type="tel" {...register("telefono", { required: "El número de teléfono es obligatorio" })} placeholder="Número de teléfono" />
            {errors.telefono && <p className="campoInvalido">{errors.telefono.message}</p>}
          </div>
          <div className="campoUser">
            <input type="text" {...register("direccion", { required: "La dirección es obligatoria" })} placeholder="Dirección" />
            {errors.direccion && <p className="campoInvalido">{errors.direccion.message}</p>}
          </div>
          <div className="campoUser1">
            <label>Disponibilidad en la semana:</label>
            <div className="disponibilidad-container1">
                <div className="custom-checkbox1">
                <input type="checkbox" id="disponibilidad1" {...register("disponibilidadSemana", { required: "Selecciona al menos una disponibilidad" })} value="8:00 - 12:00" />
                <label htmlFor="disponibilidad1">8:00 - 12:00</label>
                </div>
                <div className="custom-checkbox1">
                <input type="checkbox" id="disponibilidad2" {...register("disponibilidadSemana", { required: "Selecciona al menos una disponibilidad" })} value="12:00 - 16:00" />
                <label htmlFor="disponibilidad2">12:00 - 16:00</label>
                </div>
                <div className="custom-checkbox1">
                <input type="checkbox" id="disponibilidad3" {...register("disponibilidadSemana", { required: "Selecciona al menos una disponibilidad" })} value="16:00 - 20:00" />
                <label htmlFor="disponibilidad3">16:00 - 20:00</label>
                </div>
                {errors.disponibilidadSemana && <p className="campoInvalido">{errors.disponibilidadSemana.message}</p>}
            </div>
            </div>

          <label className='boton'>
            <input type="checkbox" class="custom-checkbox" {...register("termsAccepted", { required: "Debe aceptar los términos y condiciones" })} />
            Aceptar términos y condiciones del servicio
          </label>
          {errors.termsAccepted && <p className="campoInvalido">Debe aceptar los términos y condiciones</p>}
          <div className="button-container">
            <button type="button" onClick={handleSubmit} className="cancel-button">
              Cancelar
            </button>
            <button type="submit" className="register-button">Registrarme</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={registrationImage} alt="Registration" className="registration-image" />
      </div>
    </div>
  );
};

export default RegisterVolun;
