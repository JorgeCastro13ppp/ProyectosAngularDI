import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { emit } from 'process';

interface Tarea{
  texto:string;
  completada:boolean
}

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports: [CommonModule,TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
/**
   * Lista de tareas recibida desde el componente padre.
   */
  @Input() tareas: Tarea[] = [];

  /**
   * Evento que indica qué tarea debe eliminarse.
   */
  @Output() tareaEliminada = new EventEmitter<number>();
  @Output() tareaCompletada = new EventEmitter<number>();

  /**
   * Reemite al padre el índice de la tarea.
   */
  eliminar(index: number): void {
    this.tareaEliminada.emit(index);
  }

  completar(index:number):void {
    this.tareaCompletada.emit(index);
  }
}
