import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  menuOpen = false;

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
}
