import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class ProductoComponent {

  @Input() producto!: Producto;
  @Output() agregar = new EventEmitter<Producto>();

  agregarAlCarrito() {
    this.agregar.emit(this.producto);
  }
}
