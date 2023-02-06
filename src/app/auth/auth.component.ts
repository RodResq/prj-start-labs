import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    isLoggingMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService) {}

    onSwitchMode() {
        this.isLoggingMode = !this.isLoggingMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;
        if (this.isLoggingMode) {

        } else {
            this.authService.signup(email, password).subscribe(respData => {
                console.log(respData);
                this.isLoading = false;
            }, errorMessage => {
                this.error = errorMessage;
                this.isLoading = false;
            });
        }
        form.reset();
    }
}
