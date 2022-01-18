import React from 'react';
import './Whitefooter.css';
export default function Whitefooter() {
    return (
        <footer id="Footer-container2" className='d-flex align-items-baseline col col-md-12'>
            
            <span id="Footer-title2" className='col col-md-8 col-xl-9'>Diseñado en Uruguay</span>
                <div className='col col-md-4 col-xl-3 d-flex align-items-center justify-content-evenly'>
                    <span id="Footer-subtitle2" >Powered by </span>
                    <img alt="spotify-logo" src="./SpotifyLogoWhite.png" />
                </div>
        </footer>
    )
}
