import { useCarrito } from '../context/CarritoContext';
import { getProductos } from '../services/productService';

export default function Tienda() {
  const { carrito, agregarAlCarrito, quitarDelCarrito, totalPagar } = useCarrito();
  const productos = getProductos();

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Tu Compra de Abarrotes</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {productos.map(p => {
          const enCarrito = carrito.find(item => item.id === p.id);
          return (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
              <h4>{p.nombre}</h4>
              <p>S/ {p.precio.toFixed(2)}</p>
              
              {!enCarrito ? (
                <button onClick={() => agregarAlCarrito(p)}>Agregar</button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                  <button onClick={() => quitarDelCarrito(p.id)}>-</button>
                  <span>{enCarrito.cantidad}</span>
                  <button onClick={() => agregarAlCarrito(p)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '30px', borderTop: '2px solid #002B49', paddingTop: '10px' }}>
        <h3>Total a Pagar: S/ {totalPagar.toFixed(2)}</h3>
      </div>
    </div>
  );
}