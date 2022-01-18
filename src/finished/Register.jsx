import React from 'react';
import './Register.css';
import Header1 from '../components/Header1';
import Daypicker from '../elements/Daypicker';
import Monthpicker from '../elements/Monthpicker';
import Yearpicker from '../elements/Yearpicker';
import Checkbox from '../elements/Checkbox';
import Bodyhr from '../elements/Bodyhr.jsx';
import Whitefooter from '../components/Whitefooter';
export default function Register() {
    return (
        <div id="Register-container" >
            <Header1 />
            <body>
                <h3 id="Register-title" className='d-flex justify-content-center'>Registrate con tu direccion de email</h3>
                <div id="Form-container">
                    <form method='get' className='d-flex flex-column justify-content-center align-items-center'>
                        <input type="email" className='col col-12 col-sm-10 col-md-6 col-lg-4' id="Input-register" placeholder="Correo electronico" />
                        <input type="email" className='col col-12 col-sm-10 col-md-6 col-lg-4' id="Input-register" placeholder='Confirmar correo electronico' />
                        <input type="password" className='col col-12 col-sm-10 col-md-6 col-lg-4' id="Input-register" placeholder='Contraseña' />
                        <input type="text" className='col col-12 col-sm-10 col-md-6 col-lg-4' id="Input-register"  placeholder='Nombre de usuario' />
                        <h4 id="Date-title" className='col col-md-6 col-lg-4'>FECHA DE NACIMIENTO</h4>
                        <section className='col col-md-6 col-lg-4 d-flex flex-row justify-content-between' id="Datepick-section">
                            <Daypicker />
                            <Monthpicker />
                            <Yearpicker />    
                        </section>
                        <section className='d-flex justify-content-start col col-md-4' id="Checkbox-section">
                        <Checkbox checkboxid="Register-checkbox" checkboxcontainer="Register-container" checkboxText="Masculino" value="Male-checkbox"  />
                        <Checkbox checkboxid="Register-checkbox" checkboxcontainer="Register-container" checkboxText="Femenino" value="Female-checkbox"/>
                        <Checkbox checkboxid="Register-checkbox" checkboxcontainer="Register-container" checkboxText="Otro" value="Other-checkbox"/>
                        </section>
                        <button id="Register-button" className='col col-5 col-sm-4 col-md-3 col-lg-2'>REGISTRATE</button>
                        <Bodyhr />
                        <span className='col col-6 col-sm-6 col-md-3 col-lg-2' id="Second-title">¿Ya tienes cuenta?</span>
                   
                   <button onClick={(e) => {e.preventDefault();window.location.href='/Login'}} className='col col-3 col-sm-3 col-md-2 col-lg-2' id="Login_button-register" >Inicia Sesion</button>   
                    </form>
                <hr />      
                </div>
                <Whitefooter />
            </body>
        </div>
    )
}
