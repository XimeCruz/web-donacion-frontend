import React from "react";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cliente from "./pages/Cliente";
import { ModalContextProvider } from "./contexts/modalContext";
import Axios from 'axios';

//configuracion para axios

//Axios.interceptors.request.use()

Axios.interceptors.request.use(function(config) {
  //para saber que valores tiene config
  //console.log(config);

  //para configurar la url && se aplica template string
  config.url = `${process.env.REACT_APP_API_BASE_URL}${config.url}`;
  return config;
})

function App() {
  //se cambio a este nuevo
  //ya no se usa
  /*
  ya no se usa switch y tamópvo component en route
  */
  return (
    //cuando usamos el modal context debemos declarar el model cotext provider
    <ModalContextProvider>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/clientes" element={<Cliente/>}/>
          </Routes>
      </Router>
    </ModalContextProvider>
  );
}

export default App;
