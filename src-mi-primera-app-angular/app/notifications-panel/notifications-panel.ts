import { Component } from '@angular/core';
import { Notification } from '../notification/notification';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notifications-panel',
  standalone: true,
  imports: [Notification, MatCardModule, MatButtonModule],
  templateUrl: './notifications-panel.html',
  styleUrl: './notifications-panel.css'
})
export class NotificationsPanel {

  notificaciones = [
    { id: 1, texto: 'Bienvenido a la aplicación' }
  ];

  contador = 2;

  agregar() {
    this.notificaciones.push({
      id: this.contador++,
      texto: 'Nueva notificación'
    });
  }

  eliminar(id: number) {
    this.notificaciones = this.notificaciones.filter(n => n.id !== id);
  }
}
