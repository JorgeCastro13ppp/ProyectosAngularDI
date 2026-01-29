import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto';
import { Producto } from '../models/producto';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [
    ProductoComponent,
    MatCardModule   // 👈 ESTO FALTABA
  ],
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
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, p) => total + p.precio, 0);
  }
}
