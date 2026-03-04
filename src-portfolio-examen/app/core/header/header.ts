import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{

  menuOpen = false;

  //Aquí inicializamos las variables como nulas para después asignarle los datos recuperados del localStorage
  userName!:string|null ;
  userEmail!: string|null;

  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }

  //Aquí recuperamos los datos que anteriormente añadimos al localStorage mediante su nombre
  ngOnInit():void{
    this.userName= localStorage.getItem('name');
    this.userEmail =localStorage.getItem('email');
  }

  //Método para pruebas, se borra el localStorage
  logOut():void{
    localStorage.clear();
  }
}
