import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/estilosVolReg.css';
import registrationImage from '../images/volunt.png';
import { validarPass } from "../functions/validarPassword";
import { PasswordRForm } from "./PasswordRForm";

const RegisterVolun = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [correoValido, setCorreoValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);
  const [valido, setValido] = useState(true);

  const password = watch("password", "");
  const disponibilidadSemana = watch("disponibilidadSemana", []);

  const onSubmit = async (data) => {
    setCorreoValido(true);
    const temp = validarPass(data.Contraseña);
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
    <div className="registration-containerVolReg">
      <div className="form-containerVolReg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='h2VolReg'>Registrate Voluntario:</h2>
          <div className="campoUserVolReg">
            <input className="entradaDatosVolReg" type="text" {...register("fullName", { required: "El nombre completo es obligatorio" })} placeholder="Nombre completo" />
            {errors.fullName && <p className="campoInvalido">{errors.fullName.message}</p>}
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
          
          
          <div className="campoUserVolReg">
            <input className="entradaDatosVolReg" type="tel" {...register("telefono", { required: "El número de teléfono es obligatorio" })} placeholder="Número de teléfono" />
            {errors.telefono && <p className="campoInvalido">{errors.telefono.message}</p>}
          </div>
          <div className="campoUserVolReg">
            <input className="entradaDatosVolReg" type="text" {...register("direccion", { required: "La dirección es obligatoria" })} placeholder="Dirección" />
            {errors.direccion && <p className="campoInvalido">{errors.direccion.message}</p>}
          </div>
          <div className="campoUserVolReg">
            <label className='labelVolReg'>Disponibilidad en la semana:</label>
            <div className="disponibilidad-containerVolReg">
                <div >
                <label htmlFor="disponibilidad1" className='disp'>
                  <input className="custom-checkboxVolReg" type="checkbox" id="disponibilidad1" {...register("disponibilidadSemana", { required: "Selecciona al menos una disponibilidad" })} value="8:00 - 12:00" />
                  8:00 - 12:00</label>
                </div>
                <div>
                <label htmlFor="disponibilidad2" className='disp'>
                  <input className="custom-checkboxVolReg" type="checkbox" id="disponibilidad2" {...register("disponibilidadSemana", { required: "Selecciona al menos una disponibilidad" })} value="12:00 - 16:00" />
                  12:00 - 16:00</label>
                </div>
                <div >
                <label htmlFor="disponibilidad3" className='disp'>
                <input className="custom-checkboxVolReg" type="checkbox" id="disponibilidad3" {...register("disponibilidadSemana", { required: "Selecciona al menos una disponibilidad" })} value="16:00 - 20:00" />
                16:00 - 20:00</label>
                </div>
                {errors.disponibilidadSemana && <p className="campoInvalido">{errors.disponibilidadSemana.message}</p>}
            </div>
            </div>

          <label className='boton'>
            <input type="checkbox" class="custom-checkboxVolReg" {...register("termsAccepted", { required: "Debe aceptar los términos y condiciones" })} />
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
      <div className="image-containerVolReg">
        <img src={registrationImage} alt="Registration" className="registration-imageVolReg" />
      </div>
    </div>
  );
};

export default RegisterVolun;
