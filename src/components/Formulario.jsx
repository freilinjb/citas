import React,{ Fragment, useState} from 'react';

const Formulario = () => {

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

    //Extraer los valores
    const { id, mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario preciona agrergar cita
    const submitCita = (e) =>{
        e.preventDefault();
        console.log('ENVIADO');

        //Validar


        //Asignar un ID

        //Crear la cita


        //Reiniciar el FORM
    }

    return ( 
        <Fragment>
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