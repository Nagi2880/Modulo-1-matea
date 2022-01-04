import React from 'react';
import Header2 from '../components/Header2';
import './Home.css';
export default function Home() {
    return (
        <div id="Home-container">
            <Header2 />
            <body id="Body-container" className='d-flex flex-column align-items-center'>
                <img id="background" className='col col-md-12' alt="background" src="./background.png" />
                <h2 id="Body-subtitle" className='col col-md-12'>PONGAMOS MUSICA, JUNTOS</h2>
                <input type='search' placeholder='Buscar una playlist' id="Body-searchbar" className='col col-md-8'></input>
                <button id="Body-button" className='col col-md-3'>NUEVA PLAYLIST</button>
                
            </body>
            <footer id="Footer-container" className='d-flex align-items-baseline col col-md-12'>
                <span id="Footer-title" className='col col-md-8'>Diseñado en Uruguay</span>
                <div className='col col-md-4 d-flex align-items-center justify-content-evenly'>
                    <span id="Footer-subtitle" >Powered by </span>
                    <img alt="spotify-logo" src="./SpotifyLogo.png" />
                </div>
            </footer>
        </div>
    )
}
