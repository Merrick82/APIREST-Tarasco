import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api;

  public sessionSubject!: BehaviorSubject<Session>

  constructor(private http: HttpClient) {
    const session = {
      activeSession: false
    }

    this.sessionSubject = new BehaviorSubject(session);
  }

  public login(user: User) {
    this.http.get<User[]>(`${this.api}/usuarios`).pipe(
      map((users: User[]) => {
        return users.filter((u: User) => u.username === user.username && u.password === user.password)[0];
      })
    ).subscribe((user: User) => {
      if (user) {
        const session: Session = {
          activeSession: true,
          user: {
            username: user.username,
            password: user.password
          }
        };
    
        localStorage.setItem('isAuthenticated', "true");
        this.sessionSubject.next(session);
      } else {
        alert('Usuario no encontrado');
      }
    });
  }

  public logout() {
    const session: Session = {
      activeSession: false
    };

    localStorage.setItem('isAuthenticated', "false");
    this.sessionSubject.next(session);
  }

  public getSession() {
    return this.sessionSubject.asObservable();
  }

  public isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('isAuthenticated')!);

  }
}
