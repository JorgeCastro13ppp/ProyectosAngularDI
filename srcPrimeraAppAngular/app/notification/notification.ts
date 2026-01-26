import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card class="notification">
      <div class="content">
        <span>{{ mensaje }}</span>

        <button
          mat-icon-button
          color="primary"
          (click)="cerrar()"
          aria-label="Cerrar notificación">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </mat-card>
  `,
  styles: [`
    .notification {
      margin-bottom: 12px;
      border-left: 4px solid #3f51b5;
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `]
})
export class Notification {
  @Input() mensaje!: string;
  @Output() cerrarNotificacion = new EventEmitter<void>();

  cerrar() {
    this.cerrarNotificacion.emit();
  }
}
