import React, { useEffect, useState } from 'react'

export default function PantallaInicioSesion() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let data = localStorage.getItem("userRegistered");
        if (data) {
            setUser(JSON.parse(data));
        } else {
            console.error("No se encontraron datos en localStorage para 'userRegistered'.");
        }
    }, []);
    
    return (
        <div>
            <h1>Bienvenido Usuario :D</h1>
            {user ? (
            <div>
                <h3>Nombre: {user.name}</h3>
                <h3>Apellidos: {user.apellido}</h3>
                <h3>Edad: {user.edad}</h3>
                <h3>Numero: {user.telefono}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Contraseña: {user.pass}</h3>
            </div>
        ) : (
            <p>Cargando datos del usuario...</p>
        )}
        </div>
    )
}
