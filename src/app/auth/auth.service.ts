import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


interface AuthResponseDate {
    idToken: string,
    email: string,
    kind: string
    refreshToken: string,
    expiresIn: string,
    localId: string,
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseDate>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRazo2GdMTUYE6ze2QqhzPvvIdDptC9tc',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
          catchError(errorResp => {
            let errorMessage = 'An unknown error ocurred!'
            if (!errorResp.error || !errorResp.error.error) {
              return throwError(errorMessage);
            }
            switch(errorResp.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
            }
            return throwError(errorMessage);
          })
        )
    }

}
