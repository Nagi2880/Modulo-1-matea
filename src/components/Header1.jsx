import React from 'react';
import './Header1.css';

export default function Header1() {
    return (
        <header id="Header1">
            <a href='/' id="Home-link">
                <navbar id="navbar-elements" className='d-flex justify-content-center align-items-baseline'>
                    <img id="Img-logo" src='/Logo1.png'alt="logo" ></img>
                    <h1 id="Name-logo">Mateify</h1>
                </navbar>
            </a>
           <hr className='Header-line' />
        </header>
    )
}
