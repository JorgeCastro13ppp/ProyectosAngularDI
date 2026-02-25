import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies:string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      title: 'To-Do List Angular',
      description: 'Aplicación de tareas con Angular moderno.',
      image: 'assets/projects/lista.png',
      link: 'https://github.com/JorgeCastro13ppp',
      technologies: ['Angular','TypeScript','SCSS']
    },
    {
      title: 'Catálogo de Productos',
      description:
        'Aplicación de catálogo desarrollada con Angular Material, mostrando productos en tarjetas y gestionando interacciones de usuario.',
      image: 'assets/projects/catalogo.png',
      link: 'https://github.com/JorgeCastro13ppp',
      technologies: [
        'Angular',
        'Angular Material',
        'TypeScript',
        'Componentes reutilizables',
        'Diseño Responsive'
      ]
    },

    {
      title: 'Portfolio Angular',
      description:
        'Portfolio personal desarrollado con Angular standalone, routing, servicios y animaciones entre rutas.',
      image: 'assets/projects/portfolio.png',
      link: 'https://github.com/JorgeCastro13ppp',
      technologies: [
        'Angular Router',
        'Standalone Components',
        'Services',
        'Reactive Forms',
        'SCSS'
      ]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
