import React,{ Fragment, useState} from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <form>
                <div className="form-group">
                    <label for="mascota" className="active">Nombre Mascota</label>
                    <input type="text" className="form-control" name="mascota" placeholder="Nombre de Mascota" value="" />
                </div>
                <div className="form-group">
                    <label for="propietario" className="active">Nombre Dueño</label>
                    <input type="text" className="form-control" name="propietario" placeholder="Nombre del Dueño" value=""/>
                </div>
                <div className="form-group">
                    <label for="fecha" className="active">Fecha</label
                    ><input type="text" className="form-control" name="fecha" value="" />
                </div>
                <div className="fo<rm-group">
                    <label for="hora" className="text-white">Hora</label>
                    <input type="time" className="form-control" name="hora" value=""/>
                </div>
                <div className="form-group">
                    <label for="sintomas" className="active">Síntomas</label>
                    <textarea className="form-control" name="sintomas" id="sintomas"rows="3"></textarea>
                </div>
                <button type="submit" className="btn blue-gradient btn-block shadow waves-effect waves-light">AGREGAR CITA</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;