import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, map, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api;

  public sessionSubject!: BehaviorSubject<Session>

  constructor(private http: HttpClient, private router: Router) {
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
            id: user.id,
            username: user.username,
            password: user.password,
            admin: user.admin
          }
        };
    
        this.sessionSubject.next(session);
        this.router.navigate(['dashboard']);
      } else {
        const session: Session = {
          activeSession: false,
          error: {
            message: 'Usuario no encontrado'
          }
        };
    
        this.sessionSubject.next(session);
      }
    });
  }

  public logout() {
    const session: Session = {
      activeSession: false
    };

    this.sessionSubject.next(session);
    this.router.navigate(['login']);
  }

  public getSession(): Observable<Session> {
    return this.sessionSubject.asObservable();
  }
}
