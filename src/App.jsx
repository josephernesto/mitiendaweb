import React, { useState, useEffect } from 'react';
// 1. Importamos el "Corazón" (Contexto)
import { CarritoProvider } from './context/CarritoContext';
// 2. Importamos los Componentes (Las piezas)
import Navbar from "./components/Navbar";
import CarritoFlotante from './components/CarritoFlotante';
// 3. Importamos las Páginas (Las vistas)
import Tienda from './pages/Tienda';
import Admin from './pages/Admin';
// 4. Importamos la lógica de datos
import { getProductos } from './services/ProductService';

function App() {
  const [vista, setVista] = useState('cliente'); // Controla si vemos Tienda o Admin
  const [productos, setProductos] = useState([]);

  // Cargamos los productos al iniciar
  useEffect(() => {
    const datos = getProductos();
    setProductos(datos);
  }, []);

  return (
    <CarritoProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
        
        {/* Mostramos el Navbar arriba (siempre visible) */}
        <Navbar />

        {/* Botones temporales para que ustedes prueben las dos vistas */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px', background: '#eee' }}>
          <button onClick={() => setVista('cliente')} style={btnStyle}>Modo Cliente</button>
          <button onClick={() => setVista('admin')} style={btnStyle}>Modo Administrador</button>
        </div>

        {/* Contenido Principal: Aquí es donde salen los cuadros de productos */}
        <main style={{ paddingBottom: '80px' }}> {/* Espacio para que el carrito flotante no tape nada */}
          {vista === 'cliente' ? (
            <Tienda productos={productos} />
          ) : (
            <Admin productos={productos} />
          )}
        </main>

        {/* El Carrito Flotante (Siempre presente abajo a la izquierda) */}
        <CarritoFlotante />

      </div>
    </CarritoProvider>
  );
}

// Un estilo rápido para tus botones de prueba
const btnStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #002B49',
  backgroundColor: 'white'
};

export default App;