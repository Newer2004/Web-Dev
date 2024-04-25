import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    login(usernameOrEmail: string, password: string): Observable<any> {
        const endpoint = usernameOrEmail.includes('@') ? 'email' : 'username';
        const credentials = { [endpoint]: usernameOrEmail, password: password };

        return this.http.post('api/login', credentials).pipe(
            map((response: any) => {
                // login successful if there's a jwt token in the response
                const user = response;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            })
        );
    }

    register(username: string, email: string, password: string): Observable<any> {
        const user = { username, email, password };

        return this.http.post('api/register', user).pipe(
            map((response: any) => {
                // register successful if there's a jwt token in the response
                if (response && response.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response));
                }
                return response;
            })
        );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
