import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    isLoggingMode = true;

    onSwitchMode() {
        this.isLoggingMode = !this.isLoggingMode;
    }

    onSubmit(form: NgForm) {
        form.reset();
    }
}