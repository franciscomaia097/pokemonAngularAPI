import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}

  onBackClick(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    // perform login logic here
  }
}
