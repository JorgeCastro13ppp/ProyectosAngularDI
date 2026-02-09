import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Tarea{
  texto:string,
  completada:boolean
}

@Component({
  selector: 'app-task-item',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {

  eliminando = false;
/**
   * Texto de la tarea.
   */
  @Input() tarea!: Tarea;

  /**
   * Evento que notifica que la tarea debe eliminarse.
   */
  @Output() eliminar = new EventEmitter<void>();
  @Output() completar = new EventEmitter<void>();

  toogle(): void{
    this.completar.emit();
   }

  eliminarTarea(): void {
    this.eliminando=true;

    setTimeout(()=>{
      this.eliminar.emit();
    },250)
  }
}
