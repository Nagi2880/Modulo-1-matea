import React from 'react';
import './Mobilehome.css';

export default function Mobilehome() {
    return (
        <div id="Background-image" className=''>
            <div id="Mobilehome-container" className='d-flex flex-column justify-content-between col col-12'>    
                <header className='col col-12 d-flex justify-content-center'>
                    <img id="Mobile-Logo" src="./Logo2.png" alt="MobileLogo" />
                </header>
                <main className='col col-12 d-flex flex-column align-items-center justify-content-center'>    
                    <h6 id='Mobile-title1'>PONGAMOS MUSICA, JUNTOS</h6>
                    <span id="Mobile-title2">Crea playlists colaborativas</span>
                    <span className='col col-10' id="Mobile-title2">Vota las canciones para que se reproduzcan en el orden que quieras.</span>
                </main>
                <button id="Mobile-login" className='col col-12'onClick={(e) => {e.preventDefault();window.location.href='/Login'}}>INICIA SESION CON TU CUENTA</button>
                <button id="Mobile-register2" className='col col-12 'onClick={(e) => {e.preventDefault();window.location.href='/Register'}}>REGISTRATE PARA COMENZAR</button>
            </div>
        </div>
    )
}
