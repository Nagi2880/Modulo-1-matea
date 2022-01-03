import React from 'react';
import Header1 from './Header1';
import './Login.css';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
    <div id="Login-container">
        <Header1 />
        <body className='Body-container'>
            <h2 id="Login-title" className='d-flex justify-content-center'>Para continuar, inicia sesion</h2>
            <form method='get'>
                <div id="Inputs-container" className='col col-md-12 d-flex flex-column justify-content-center align-items-sm-center'>    
                    <input id="Inputs" type="text" className='col col-md-6' placeholder='Correo electronico o nombre de usuario' />
                    <input id="Inputs" type="text" className='col col-md-6' placeholder='Contraseña' />
                </div>
                <div id='Start-sesion'  className=' col col-md-12 d-flex justify-content-center'>
                    <div id="Checkbox-container" className='d-flex col col-md-3'>    
                        <input id="Checkbox-1" type="checkbox"/>
                        <span id="Recuerdame-checkbox">Recuerdame</span>
                    </div>
                    <button id="Sesion-button" className='col col-md-3'>INICIAR SESION</button>
                </div>
                <Link to="/xd" style={{ textDecoration: 'none' }}><span id="Text-olvidado" className='d-flex justify-content-center'>¿Has olvidado la contraseña?</span></Link>
                <hr />
            </form>
            <div id="Registrate_button-container" className='col col-md-12 d-flex flex-column align-items-sm-center'>
                <span className='col col-md-2' id="Second-title">¿No tienes cuenta?</span>
                   
                   <button onClick={(e) => {e.preventDefault();window.location.href='/Register'}}  className='col col-md-2' id="Login_button-register" >Registrate</button>   
              
            </div>
        </body>
    </div>    
    );
};
