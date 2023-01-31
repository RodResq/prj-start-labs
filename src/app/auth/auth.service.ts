import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface AuthResponseDate {
    idToken: string,
    email: string,
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
        )
    }

}