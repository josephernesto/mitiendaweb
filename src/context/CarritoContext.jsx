import { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para AGREGAR o SUMAR
  const agregarAlCarrito = (producto) => {
    setCarrito(itemsActuales => {
      const existe = itemsActuales.find(item => item.id === producto.id);
      if (existe) {
        return itemsActuales.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...itemsActuales, { ...producto, cantidad: 1 }];
    });
  };

  // Función para QUITAR o RESTAR
  const quitarDelCarrito = (id) => {
    setCarrito(itemsActuales => {
      const producto = itemsActuales.find(item => item.id === id);
      if (producto.cantidad > 1) {
        return itemsActuales.map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      }
      return itemsActuales.filter(item => item.id !== id);
    });
  };

  const totalPagar = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, totalPagar }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);