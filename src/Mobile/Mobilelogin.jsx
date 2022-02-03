import React from "react";
import './Mobilelogin.css';
import { Link } from "react-router-dom";
export default function Mobilelogin() {
  return (
    <div id="Background-loginimage">
        <div id="Mobilelogin-container" className="d-flex flex-column align-items-center"> 
          <h6 className="d-flex justify-content-center" id="Mateify-mobilelogin">Mateify</h6>
          <form className="d-flex flex-column align-items-center col col-11" id="Form-mobilelogin">
            <h6 className="d-flex justify-content-center" id="Title-mobilelogin">Para continuar, inicia sesion</h6>
            <input type="email" className="col col-11" id="Input-mobilelogin" placeholder="Correo electronico o nombre de usuario"/>
            <input type="password" className="col col-11" id="Input-mobilelogin" placeholder="Contraseña" />
            <div id="checkboxmobile-container" className=" col col-11 d-flex">
              <input id="Checkbox-1" type="checkbox" />
              <h6 id="Recuerdame-checkbox">Recuerdame</h6>
            </div>
            <button className="col col-11" id="Inciasesion-button">INICIA SESION</button>
            <Link to="/xd" style={{ textDecoration: 'none' }}><span id="Text-olvidado" className='d-flex justify-content-center'>¿Has olvidado la contraseña?</span></Link>
            <span className='col ' id="Second-title">¿No tienes cuenta?</span>
            <button onClick={(e) => {e.preventDefault();window.location.href='/Register'}} className='col col-3 ' id="Mobilelogin-registerbutton" >Registrate</button>
          </form>
          <footer className="d-flex justify-content-center align-items-center col col-12" id="Mobile-footercontainer">
            <span id="Poweredby">Powered by</span>
            <img alt="spotify-logo" src="./SpotifyLogo.png" />
          </footer>
        </div>  
    </div>
  )
};