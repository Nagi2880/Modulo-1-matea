import React from 'react';
import Header2 from '../components/Header2';
import './Home.css';
import Footer from '../components/Footer';
import Mobilehome from '../Mobile/Mobilehome';

export default function Home() {
    return (
        <div id="Home-container" className=''>
            <div className='d-none d-sm-block'>   
                <Header2 />
                <body id="Body-container" className='d-flex flex-column align-items-center'>
                    <img id="background" className='col col-md-12 col-xl-12' alt="background" src="./background.png" />
                    <h2 id="Body-subtitle" className='col col-md-12 col-lg-10 col-xl-8'>PONGAMOS MUSICA, JUNTOS</h2>
                    <input type='search' placeholder='Buscar una playlist' id="Body-searchbar" className='col col-md-8 col-lg-7 col-xl-5'></input>
                    <button id="Body-button" className='col col-md-4 col-lg-3 col-xl-2'>NUEVA PLAYLIST</button>
                </body>
                <Footer />
            </div>    
            <div className='d-block d-sm-none'>
                <Mobilehome />
            </div>    
        </div>
    )
}
