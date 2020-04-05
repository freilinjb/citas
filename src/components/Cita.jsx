import React from 'react';
import PropTypes from 'prop-types';


const Cita = (props) => {

    const { cita, eliminarCita } = props;    
    
    const { id ,mascota, propietario, fecha, hora, sintomas } = cita;

    return ( 
        <div className="cita rounded shadow">
            <p><strong>Mascota:</strong><span>{mascota}</span></p>
            <p><strong>Propietario:</strong><span>{propietario}</span></p>
            <p><strong>Fecha:</strong><span>{fecha}</span></p>
            <p><strong>Hora:</strong><span>{hora}</span></p>
            <p><strong>Sintomas:</strong>{sintomas}<span></span></p>
            <button className="btn peach-gradient btn-block" onClick={()=> eliminarCita(id)} >Eliminar ×</button>
        </div>
     );
}
Cita.propTypes = {
    cita: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
} 

export default Cita;