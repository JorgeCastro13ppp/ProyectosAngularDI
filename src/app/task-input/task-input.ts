import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
/**
   * Texto introducido por el usuario.
   * Se enlaza con el input mediante ngModel.
   */
  textoTarea: string = '';

  /**
   * Evento que envía la nueva tarea al componente padre.
   */
  @Output() tareaCreada = new EventEmitter<string>();

  /**
   * Emite la tarea y limpia el input.
   */
  agregar(): void {
    this.tareaCreada.emit(this.textoTarea);
    this.textoTarea = '';
  }
}
