import React from 'react';
import './Datepicker.css';


 function Datepicker() {
    const dia = [];
    for(var i = 1; i <= 31; i++){
        dia.push(i);
    }
   
    return (
        <select className='col-2' id="Date-button"> 
            <option>Dia</option>
            {dia.map(dia =>{
            return(
                <option>
                    {dia}
                </option>
            )
        })} 
        </select>
    );
}
export default Datepicker