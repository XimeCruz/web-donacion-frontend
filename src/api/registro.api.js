import axios from "axios";


const API_URL = axios.create({baseURL: "http://localhost:9091/registro/"});

export const registrarUsuario = (data) => API_URL.post("/usuario/", data);

export const actualizarUsuario = (data) => API_URL.put("/actualizar-user/", data);

export const eliminarUsuario = (data) => API_URL.put("/eliminar-contacto/", data);


export const getUsuario = (id) => API_URL.get(`/usuario/${id}/`);

export const iniciarSesion = (data) => API_URL.post("/inicio-sesion/", data);

export const obtenerCodigo = (data) => API_URL.post("/obtenerCodigo/", data);
