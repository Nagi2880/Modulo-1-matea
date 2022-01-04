import React from 'react';
import Header1 from '../components/Header1';
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
                    <input id="Inputs" type="text" className='col col-12 col-sm-10 col-md-6 col-lg-4' placeholder='Correo electronico o nombre de usuario' />
                    <input id="Inputs" type="text" className='col col-12 col-sm-10 col-md-6 col-lg-4' placeholder='Contraseña' />
                </div>
                <div id='Start-sesion'  className='col col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center'>
                    <div id="Checkbox-container" className='d-flex col col-6 col-sm-6 col-md-3 col-lg-2'>    
                        <input id="Checkbox-1" type="checkbox"/>
                        <span id="Recuerdame-checkbox">Recuerdame</span>
                    </div>
                    <button id="Sesion-button" className='col col-5 col-sm-4 col-md-3 col-lg-2'>INICIAR SESION</button>
                </div>
                <Link to="/xd" style={{ textDecoration: 'none' }}><span id="Text-olvidado" className='d-flex justify-content-center'>¿Has olvidado la contraseña?</span></Link>
                  
            </form>
            
            <footer id="Registrate_button-container" className='col col-md-12 d-flex flex-column align-items-center'>
                <hr id="Footer-line" />
                <span className='col col-6 col-sm-6 col-md-3 col-lg-2' id="Second-title">¿No tienes cuenta?</span>
                   
                   <button onClick={(e) => {e.preventDefault();window.location.href='/Register'}} className='col col-3 col-sm-3 col-md-2 col-lg-2' id="Login_button-register" >Registrate</button>   
              
            </footer>
        </body>
    </div>    
    );
};
