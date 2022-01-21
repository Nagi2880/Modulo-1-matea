import React from 'react';
import './Footer.css';
export default function Footer() {
    return (
        <footer id="Footer-container" className='d-flex align-items-baseline col col-sm-12 col-md-12'>
                <span id="Footer-title" className='col col-md-8 col-xl-9'>Diseñado en Uruguay</span>
                <div className='col col-md-4 col-xl-3 d-flex align-items-center justify-content-evenly'>
                    <span id="Footer-subtitle" >Powered by </span>
                    <img alt="spotify-logo" src="./SpotifyLogo.png" />
                </div>
        </footer>
    )
}
