import React from 'react'
import './Header2.css';
export default function Header2() {
    return (
        <header id='Header-container' className='d-flex col col-md-12 align-items-center justify-content-between  '>
            <div id="Mateify-container" className='d-flex col col-md-6'>
                <img id="Logo2" alt='Logo2' src="./Logo2.png"></img>
                <h1 id="Header-title" >Mateify</h1>
            </div>
            <ul id="Navbar" className='d-flex justify-content-evenly col col-md-5'>
                <li id="Nav-button"><a href="/Register">Registrarse</a></li>
                <li id="Nav-button" className='Login'><a href="/Login">Iniciar Sesion</a></li>
            </ul>
        </header>
    )
}
