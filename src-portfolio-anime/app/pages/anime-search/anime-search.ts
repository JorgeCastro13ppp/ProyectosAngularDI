import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Anime, AnimeService } from '../../services/anime';
import { catchError, finalize, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-anime-search',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './anime-search.html',
  styleUrl: './anime-search.scss',
})
export class AnimeSearch {
  query = '';
  animes$!: Observable<Anime[]>;
  loading = false;
  error = false;

  constructor(private animeService: AnimeService) {}

  search(): void {
    if (!this.query.trim()) return;

    this.loading = true;
    this.error = false;

    this.animes$ = this.animeService.searchAnime(this.query).pipe(
      map(response => response.data),
      finalize(() => this.loading = false),
      catchError(() => {
        this.error = true;
        return of([]);
      })
    );
  }

  onImageError(event: Event) {
  (event.target as HTMLImageElement).src = 'assets/placeholder.png';
}
}
