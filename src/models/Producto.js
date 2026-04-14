// Clase Base (Como el "Animal")
export class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

// Clase Especializada (Como el "Perro" que hereda de Animal)
export class Abarrote extends Producto {
  constructor(id, nombre, precio, stock, categoria) {
    super(id, nombre, precio, stock);
    this.categoria = categoria; // Ejemplo: "Lácteos", "Menestras"
  }
}