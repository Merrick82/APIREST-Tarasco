import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curse } from 'src/app/models/curse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurseService {
  private api: string = environment.api;

  constructor(private http: HttpClient) { }

  public getCurses(): Observable<Curse[]> {
    return this.http.get<Curse[]>(`${this.api}/curses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
}
