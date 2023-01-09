import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject!: BehaviorSubject<User | null>;

  constructor( private router: Router,
    private http: HttpClient) {
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    }

    public get userValue() {
      return this.userSubject.value;
     }

  login(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/admin/login`, { email })
        .pipe(map(user => {
             localStorage.setItem('user', JSON.stringify(user['user_details']));
             this.userSubject.next(user['user_details']);
            return user;
        }));
}
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/login']);
    }
}
