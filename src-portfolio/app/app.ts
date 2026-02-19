import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Footer } from './core/footer/footer';
import { Header } from './core/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
  trigger('routeAnimations', [
    transition('* => *', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('300ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      )
    ])
  ])
]

})
export class App {
  protected readonly title = signal('portfolio-angular');
}
