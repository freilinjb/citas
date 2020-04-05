import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    console.log(cita);
    console.log('enviando cita');
  } 

  return (
    <Fragment>
        <h1 className=" text-center text-white text-monospace mt-2">ADMINISTRADOR DE PACIENTES</h1>      
        <div className="container mt-3">
        <hr></hr>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 className="text-monospace text-center titulo mt-3">ADMINISTRA TUS CITAS</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default App;
