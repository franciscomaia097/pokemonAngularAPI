import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  onBackClick(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      alert('Login successful');
      this.router.navigate(['/']);
    } else {
      alert('Invalid username or password');
    }
  }
}
