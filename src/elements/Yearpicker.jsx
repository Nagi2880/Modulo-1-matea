import React from 'react';

export default function Yearpicker() {


    const Year = []
    const current = new Date()
    const year = current.getFullYear()
    for(var i = year; i >= 1900 ;i--){
        Year.push(i);
    }
    return (
        <select className='col col-3' id="Date-button">
            <option>Año</option>
            {Year.map(year =>{
                return(
                    <option>
                        {year}
                    </option>
                )
            })}
        </select>
    )

}
