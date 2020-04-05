import React,{ Fragment, useState} from 'react';
import {  v4 as uuidv4 } from 'uuid';


const Formulario = ( props ) => {

    const  {crearCita} = props;


    const [cita, actualizarCita] = useState({
        id: '',
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const actualizarState = (e) =>{
        // console.log(`Nombre del componente: ${e.target.name}\tValor: {${e.target.value}}`);
        actualizarCita({
            //Sprell operator
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const [error, actualizarError] = useState(false);


    //Extraer los valores
    const { id, mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario preciona agrergar cita
    const submitCita = (e) =>{
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
        hora.trim() === '' || sintomas.trim() === '') {
            // console.log('Hay un error');
            actualizarError(true);
            //EL return impide que sesiga ejecutando mas abajo
            return;
        } 


        actualizarError(false);
        

 
        //Asignar un ID
        cita.id = uuidv4();        

        //Crear la cita
        crearCita(cita);

        //Reiniciar el FORM
        actualizarCita({
            id: '',
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return ( 
        <Fragment>
          <h3 className="text-monospace text-center titulo mt-3">CREAR CITA</h3>
          { error ? <p className="alert alert-danger error">Todos los campos son obligatorios</p>
           : null }
            <form onSubmit={submitCita}>
                <div className="form-group">
                    <label htmlFor="mascota" className="active">Nombre Mascota</label>
                    <input type="text" onChange={actualizarState} className="form-control" name="mascota" placeholder="Nombre de Mascota" value={mascota} />
                </div>
                <div className="form-group">
                    <label htmlFor="propietario" className="active">Nombre Dueño</label>
                    <input type="text" onChange={actualizarState} className="form-control" name="propietario" placeholder="Nombre del Dueño" value={propietario}/>
                </div>
                <div className="form-group">
                    <label htmlFor="fecha" className="active">Fecha</label
                    ><input type="date" onChange={actualizarState} className="form-control" name="fecha"  value={fecha}/>
                </div>
                <div className="fo<rm-group">
                    <label htmlFor="hora" className="text-white">Hora</label>
                    <input type="time" onChange={actualizarState} className="form-control" name="hora" value={hora}/>
                </div>
                <div className="form-group">
                    <label htmlFor="sintomas" className="active">Síntomas</label>
                    <textarea onChange={actualizarState} className="form-control" name="sintomas" id="sintomas"rows="3" value={sintomas}></textarea>
                </div>
                <button type="submit" className="btn blue-gradient btn-block shadow waves-effect waves-light">AGREGAR CITA</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;