import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Album {
  id: number;
  title: string;
  coverPhoto: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'http://localhost:4200/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }
}


interface Album {
  id: number;
  title: string;
  coverPhoto: string;
}
