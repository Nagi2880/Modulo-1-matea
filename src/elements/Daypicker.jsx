import React from 'react';



 function Datepicker() {
    const dia = [];
    for(var i = 1; i <= 31; i++){
        dia.push(i);
    }
   
    return (
        <select> 
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