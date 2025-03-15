import Login from "./components/Login.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css';
import PantallaPrincipal from "../screens/PantallaPrincipal.jsx";
import PantallaInicioSesion from "../screens/PantallaInicioSesion.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/PantallaPrincipal" element={<PantallaPrincipal />} />
            <Route path="/PantallaInicioSesion" element={<PantallaInicioSesion/>}/>
        </Routes>
    );
}

export default App;
