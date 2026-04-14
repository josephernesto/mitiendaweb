import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { ShoppingCart, X, Trash2, User, Phone } from 'lucide-react';

export default function CarritoFlotante() {
  const { carrito, agregarAlCarrito, quitarDelCarrito, totalPagar } = useCarrito();
  const [isOpen, setIsOpen] = useState(false);
  const [confirmando, setConfirmando] = useState(false);

  return (
    <>
      {/* Botón Flotante */}
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed', bottom: '20px', left: '20px',
          backgroundColor: '#002B49', color: 'white', border: 'none',
          borderRadius: '50%', width: '60px', height: '60px', cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)', zIndex: 1000
        }}
      >
        <ShoppingCart size={30} />
        {carrito.length > 0 && (
          <span style={{
            position: 'absolute', top: '0', right: '0',
            backgroundColor: '#e74c3c', borderRadius: '50%', padding: '2px 7px', fontSize: '12px'
          }}>{carrito.length}</span>
        )}
      </button>

      {/* Ventana Lateral (Drawer) */}
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '320px', height: '100%',
          backgroundColor: 'white', boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
          zIndex: 1001, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Tu Pedido</h3>
            <X onClick={() => {setIsOpen(false); setConfirmando(false)}} style={{ cursor: 'pointer' }} />
          </div>

          <hr />

          {/* Lista de productos en el historial */}
          <div style={{ flexGrow: 1 }}>
            {carrito.length === 0 ? <p>El carrito está vacío</p> : (
              carrito.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>{item.nombre}</span><br />
                    <small>{item.cantidad} x S/ {item.precio.toFixed(2)}</small>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button onClick={() => quitarDelCarrito(item.id)} style={{ padding: '2px 5px' }}>-</button>
                    <Trash2 size={16} color="red" onClick={() => {/* Función eliminar todo el item */}} style={{cursor:'pointer'}}/>
                    <button onClick={() => agregarAlCarrito(item)} style={{ padding: '2px 5px' }}>+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sección de Confirmación */}
          {carrito.length > 0 && (
            <div style={{ borderTop: '2px solid #eee', paddingTop: '10px' }}>
              <h4>Total: S/ {totalPagar.toFixed(2)}</h4>
              
              {!confirmando ? (
                <button 
                  onClick={() => setConfirmando(true)}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                  Confirmar Compra
                </button>
              ) : (
                <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <User size={18} /><input type="text" placeholder="Tu nombre" required style={{ width: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Phone size={18} /><input type="tel" placeholder="Celular" required style={{ width: '100%' }} />
                  </div>
                  <button 
                    type="submit"
                    style={{ padding: '10px', backgroundColor: '#002B49', color: 'white', border: 'none', borderRadius: '5px' }}
                  >
                    Enviar Pedido (S/ {totalPagar.toFixed(2)})
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}