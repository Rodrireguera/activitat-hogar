import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    email: string = '';
    contrasenya: string = ''; 
    error: string = '';

    constructor(
      private authService: AuthService,
      private router: Router
    ){}
    
    login() {

      const ok = this.authService.login(this.email, this.contrasenya);
      
      if (ok) {
        this.router.navigate(['/preferits']);
      } else {
        this.error = 'Credencials incorrectes';
      }
    }
  } 
