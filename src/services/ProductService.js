import { Abarrote } from '../models/Producto';

// Simulamos una base de datos de abarrotes
const inventarioInicial = [
  new Abarrote(1, "Arroz Superior 1kg", 4.50, 20, "Cereales"),
  new Abarrote(2, "Leche Gloria 400g", 4.20, 15, "Lácteos"),
  new Abarrote(3, "Aceite Primor 1L", 11.50, 10, "Aceites")
];

export const getProductos = () => {
  return inventarioInicial;
};