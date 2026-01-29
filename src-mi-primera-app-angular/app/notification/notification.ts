import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './notification.html'
    
  ,
  styleUrl: './notification.css'
})
export class Notification {
  @Input() mensaje!: string;
  @Output() cerrarNotificacion = new EventEmitter<void>();

  cerrar() {
    this.cerrarNotificacion.emit();
  }
}
