import { ProductoBase } from './ProductoBase';

// Esta clase hereda de la base (Como el Perro hereda de Animal)
export class Abarrote extends ProductoBase {
    constructor(id, nombre, precio, stock, fechaVencimiento) {
        super(id, nombre, precio, stock); // Llama al constructor de la madre
        this.fechaVencimiento = fechaVencimiento;
    }

    // Método específico de abarrotes
    estaVencido() {
        const hoy = new Date();
        return new Date(this.fechaVencimiento) < hoy;
    }
}