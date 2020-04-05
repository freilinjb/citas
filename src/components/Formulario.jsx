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

    const actualizarState = () =>{
        console.log('escribiendo...');
        
    }

    return ( 
        <Fragment>
            <form>
                <div className="form-group">
                    <label htmlFor="mascota" className="active">Nombre Mascota</label>
                    <input type="text" onChange={actualizarState} className="form-control" name="mascota" placeholder="Nombre de Mascota"  />
                </div>
                <div className="form-group">
                    <label htmlFor="propietario" className="active">Nombre Dueño</label>
                    <input type="text" className="form-control" name="propietario" placeholder="Nombre del Dueño" />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha" className="active">Fecha</label
                    ><input type="text" className="form-control" name="fecha"  />
                </div>
                <div className="fo<rm-group">
                    <label htmlFor="hora" className="text-white">Hora</label>
                    <input type="time" className="form-control" name="hora" />
                </div>
                <div className="form-group">
                    <label htmlFor="sintomas" className="active">Síntomas</label>
                    <textarea className="form-control" name="sintomas" id="sintomas"rows="3"></textarea>
                </div>
                <button type="submit" className="btn blue-gradient btn-block shadow waves-effect waves-light">AGREGAR CITA</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;