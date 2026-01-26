import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class Tienda {

  productos: Producto[] = [
    { id: 1, nombre: 'Portátil', precio: 999 },
    { id: 2, nombre: 'Ratón', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 75 }
  ];

  carrito: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    console.log('Carrito:', this.carrito);
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, p) => total + p.precio, 0);
  }
}
