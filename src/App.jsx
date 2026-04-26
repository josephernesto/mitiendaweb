import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/paginaVentanas/inicio/Inicio"; // Importa tu nueva página
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Aquí puedes mantener el Navbar que creamos antes */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* Aquí irán las rutas de Niños y Adultos después */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;