import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PantallaPrincipal() {
    const navigate = useNavigate();
    const [numAttempt, setnumAttempt] = useState(2);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword && numAttempt >= 0) {
            navigate("/PantallaInicioSesion");
        } else {
            setError("Correo o contraseña incorrectos. Número de intentos permitidos: " + numAttempt);

            numAttempt >= 0 ?
            setnumAttempt(numAttempt - 1) :
            setError("Se ha bloqueado tu acceso, intentalo mas tarde")
        }
    };

    return (
        <div>
            <h1>Inicio de sesión</h1>
            <p>Ingresa tu correo</p>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <p>Ingresa tu contraseña</p>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br /> <br />

            <button type="button" onClick={handleLogin}>Iniciar sesión</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
