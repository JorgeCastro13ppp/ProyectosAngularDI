import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score: number;
}

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}

  searchAnime(query: string): Observable<{ data: Anime[] }> {
    return this.http.get<{ data: Anime[] }>(
      `${this.baseUrl}/anime?q=${query}`
    );
  }
}
