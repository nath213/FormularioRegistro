import React from 'react'

export default function Login() {
    return (
        <div>
            <form onSubmit={""}>
                <input type="text" placeholder='Nombre(S)'/>
                <input type="text" placeholder='Apellidos'/>
                <input type="number" placeholder='Edad'/>
                <input type="number" placeholder='Telefono'/>
                <input type="password" placeholder='Ingresa la contraseña'/>
                <input type="password" placeholder='Debe coincidir con la contraseña'/>
                <input type="submit" />
            </form>
        </div>
    )
}
