import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';

interface Tarea {
  texto:string,
  completada:boolean
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TaskInput,
    TaskList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  /**
   * Signal que almacena la lista de tareas.
   * Se utiliza signal para aprovechar Angular moderno,
   * pero la comunicación sigue siendo por Input y Output.
   * Signal que almacena la lista de tareas.
   * Cada tarea tiene texto y estado de completado.
   */
  tareas = signal<Tarea[]>([]);

  modoOscuro = signal(false);
  /**
   * Añade una nueva tarea al array.
   * @param tarea Texto recibido desde task-input
   */
  agregarTarea(texto: string): void {
    if (texto.trim().length > 0) {
      this.tareas.update(lista => [...lista,
         {texto, completada: false}]);
    }
  }

  /**
   * Elimina una tarea según su índice.
   * @param index Índice de la tarea a eliminar
   */
  eliminarTarea(index: number): void {
    this.tareas.update(lista =>
      lista.filter((_, i) => i !== index)
    );
  }

  toggleCompletada(index:number): void{
    this.tareas.update(lista=>
      lista.map((tarea,i)=>
      i===index
        ?{...tarea,completada: !tarea.completada}
        : tarea
      )
    );
  }

  toggleModoOscuro(): void {
    this.modoOscuro.update(v => !v);
  }

}
