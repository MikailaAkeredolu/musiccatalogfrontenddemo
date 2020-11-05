import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './music';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  fetchMusicAlbums(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/music`);
  }

  addMusicAlbum(music: Music) {
      return this.http.post(`http://localhost:8080/music`, music);
  }




}
