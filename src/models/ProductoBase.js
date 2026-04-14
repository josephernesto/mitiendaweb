// Esta es la "Clase Madre" (Como el Animal)
export class ProductoBase {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // Método que todos heredan
    obtenerResumen() {
        return `${this.nombre} - S/ ${this.precio}`;
    }
}