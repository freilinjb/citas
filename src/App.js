import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  //pregunta si no hay citas inicializalo como un arreglo vacio
  if(!citasIniciales) {
    citasIniciales = [];
  }

  


  //Arreglo de citas
  const [citas, guardarCitas] = useState([citasIniciales]);

  //Use effect para realizar ciertas operaciones cuando el state cambie
  //Se ejecuta cuando el componente esta listo o cuand o hay cambios en el componente
  useEffect(() => {
    //cuando sita detecta un cambio lo coloca automaticamente en el local storage
    if(citasIniciales) {
      //Carga la primera vez cuando alga datos
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      //cuando no haya nada
      localStorage.setItem('citas', JSON.stringify([]));

    }
    //cada vez que cambie el state de citas se ejecuta la funcion
  }, [citas, citasIniciales])

  // Funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    
    guardarCitas([...citas,cita]);
  } 

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  // console.log(cita.length);
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';  


  return (
    <Fragment>
        <h1 className=" text-center text-white text-monospace mt-2">ADMINISTRADOR DE PACIENTES</h1>      
        <div className="container mt-3">
        <hr></hr>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <Formulario key="crea-cita" crearCita={crearCita}/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 className="text-monospace text-center titulo mt-3">{titulo}</h3>
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
