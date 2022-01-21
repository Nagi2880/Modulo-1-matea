import React from 'react';



export default function Monthpicker() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

   const Mes = meses.map(mes =>{
      return(<option>{mes}</option>)  
    })

    return (
       <select className='col col-5' id="Date-button">
        <option>Mes</option>   
           {Mes}
       </select>
    )
}
