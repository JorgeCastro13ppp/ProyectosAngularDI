import { Component } from '@angular/core';
import { Notification } from '../notification/notification';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notifications-panel',
  standalone: true,
  imports: [Notification, MatCardModule, MatButtonModule],
  template: `
    <div class="container">

      <mat-card class="panel">

        <mat-card-header>
          <mat-card-title>Notificaciones</mat-card-title>
        </mat-card-header>

        <mat-card-content>

          <button
            mat-raised-button
            color="primary"
            (click)="agregar()">
            Añadir notificación
          </button>

          <div class="list">

            @if (notificaciones.length > 0) {
              @for (noti of notificaciones; track noti.id) {
                <app-notification
                  [mensaje]="noti.texto"
                  (cerrarNotificacion)="eliminar(noti.id)">
                </app-notification>
              }
            } @else {
              <p class="empty">No hay notificaciones</p>
            }

          </div>

        </mat-card-content>

      </mat-card>

    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }

    .panel {
      width: 400px;
    }

    .list {
      margin-top: 20px;
    }

    .empty {
      text-align: center;
      color: #777;
      margin-top: 20px;
    }
  `]
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
