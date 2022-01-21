import React from 'react';
import './Mobilereg.css';
import Daypicker from '../elements/Daypicker';
import Monthpicker from '../elements/Monthpicker';
import Yearpicker from '../elements/Yearpicker';
import Checkbox from '../elements/Checkbox';

export default function Mobilereg() {
  return (
      <div id="Background-image" className='mobile-background'>
          <div id="Mobilehome-container" className='d-flex flex-column justify-content-between col col-12'>    
          <h6 id="Mobile-mateify" className='col col-12 d-flex justify-content-center'>Mateify</h6> 
            <div id="Mobileregis-container" className='col col-12 d-flex justify-content-center align-items-center' >
              <body id="Data-container" className='col col-11 '>
                <h3 id="Mobileregis-title" className='d-flex justify-content-center'>Registrate con tu direccion de email</h3>
                <div id="Form-container">
                    <form method='get' className='d-flex flex-column justify-content-center align-items-center'>
                        <input type="email" className='col col-11 ' id="Input-register" placeholder="Correo electronico" />
                        <input type="email" className='col col-11 ' id="Input-register" placeholder='Confirmar correo electronico' />
                        <input type="password" className='col col-11' id="Input-register" placeholder='Contraseña' />
                        <input type="text" className='col col-11 ' id="Input-register"  placeholder='Nombre de usuario' />
                        <h4 id="Date-title" className='col col-11'>FECHA DE NACIMIENTO</h4>
                        <section className='col col-12 d-flex flex-row justify-content-evenly' id="Datepick-section">
                            <Daypicker />
                            <Monthpicker />
                            <Yearpicker />    
                        </section>
                        <section className='d-flex justify-content-start col-12' id="Checkbox-section">
                        <Checkbox checkboxid="Register-checkbox" checkboxcontainer="Register-container" checkboxText="Masculino" value="Male-checkbox"  />
                        <Checkbox checkboxid="Register-checkbox" checkboxcontainer="Register-container" checkboxText="Femenino" value="Female-checkbox"/>
                        <Checkbox checkboxid="Register-checkbox" checkboxcontainer="Register-container" checkboxText="Otro" value="Other-checkbox"/>
                        </section>
                        <button id="Mobileregis-button" className='col col-11'>REGISTRATE</button>
                  
                        
                   <button onClick={(e) => {e.preventDefault();window.location.href='/Login'}} className='col col-11' id="Mobileregis-login" >INICIA SESION CON TU CUENTA </button>   
                    </form>
                  </div> 
              </body>
            </div>
          </div>
      </div>
  )
}