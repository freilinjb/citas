import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {

  const [citas, guardarCitas] = useState();

  return (
    <Fragment>
        <h1 class=" text-center text-white text-monospace mt-2">ADMINISTRADOR DE PACIENTES</h1>      <div className="container mt-3">
        <hr></hr>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <h3>CREAR CITA</h3>
            <Formulario citas={citas}/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 class="text-monospace text-center titulo">ADMINISTRA TUS CITAS</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default App;
