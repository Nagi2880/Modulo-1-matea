import React from 'react'
import Header1 from './Header1'
export default function Login() {
    return (
    <div id="Login-container">
        <Header1 />
        <body>
            <h2>Para continuar, inicia sesion</h2>
            <form>
                <input type="text" placeholder='Correo electronico o nombre de usuario' />
                <input type="text" placeholder='Contraseña' />
                <div id='Start sesion'  className='d-flex'>
                    <input type="checkbox"  />
                    <span id="Recuerdame-checkbox">Recuerdame</span>
                    <button id="Sesion-button">INICIAR SESION</button>
                </div>
            </form>
        </body>
    </div>    
    );
};
