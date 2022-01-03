import React from 'react';
import './Header.css';

export default function Header1() {
    return (
        <header id="Header1">
            <navbar id="navbar-elements" className='d-flex justify-content-center align-items-baseline'>
                <img id="Img-logo" src='/Logo1.png'alt="logo" ></img>
                <h1 id="Name-logo">Mateify</h1>
            </navbar>
           <hr className='Header-line' />
        </header>
    )
}
