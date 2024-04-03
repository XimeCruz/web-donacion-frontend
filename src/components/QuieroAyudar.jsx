import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../../../src/assets/home-banner-background.png";
import BannerImage from "../../../src/assets/home-banner-image.png";
import RegisterVolun from '../RegisterVolun';
import { useNavigate } from 'react-router-dom';

const QuieroAyudar = () => {
    const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [valido, setValido] = useState(true);

  const [correoValido, setCorreoValido] = useState(true);


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
    return{
        


        
    };
};
export default QuieroAyudar;