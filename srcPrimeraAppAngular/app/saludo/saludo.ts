import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class Saludo {
  nombre: string = 'Mundo';

  cambiarNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
