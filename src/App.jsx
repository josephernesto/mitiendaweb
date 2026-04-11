import { useState } from 'react'

function App() {
  const [carrito, setCarrito] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🛒 Mi Tienda de Abarrotes</h1>
      <p>Bienvenida, María Elena. Este es el inicio de tu proyecto.</p>
      
      <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
        <h3>Arroz Superior</h3>
        <p>Precio: S/ 4.50</p>
        <button onClick={() => setCarrito(carrito + 1)}>
          Agregar al carrito
        </button>
      </div>

      <h2 style={{ marginTop: '20px' }}>
        Productos en el carrito: {carrito}
      </h2>
    </div>
  )
}

export default App