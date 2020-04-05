import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //Use effect para realizar ciertas operaciones cuando el state cambie
  //Se ejecuta cuando el componente esta listo o cuando hay cambios en el componente
  useEffect(() => {
    console.log('documento listo o algo paso con las citas');
    //cada vez que cambie el state de citas se ejecuta la funcion
  }, [citas])

  // Funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    
    guardarCitas([...citas,cita]);
  } 

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
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
            { citas.map( cita =>(
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita}/>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default App;
