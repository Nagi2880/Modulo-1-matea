import React from 'react'
import Header1 from '../components/Header1';
import Datepicker from '../elements/Daypicker';
export default function Register() {
    return (
        <div id="Register-container">
            <Header1 />
            <div id="Form-container">
                <form>
                    <input type="email" id="Input-register" placeholder="Correo electronico" />
                    <input type="email" id="Input-register" placeholder='Confirmar correo electronico' />
                    <input type="password" id="Input-register" placeholder='Contraseña' />
                    <input type="text" id="Input-register"  placeholder='Nombre de usuario' />
                    <section>
                        
                            <Datepicker />
                            
                        
                        <select>
                            <option>Mes</option>
                        </select>
                        <select>
                            <option>Año</option>
                        </select>
                        
                    </section>
                </form>
                
            </div>
        </div>
    )
}
