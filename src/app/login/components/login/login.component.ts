import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Login } from '../../model/login.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials: Login = { nombre: '', clave: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  login(): void {

    //si no hay usuario o clave

    if (!this.credentials.nombre || !this.credentials.clave) {
      this.errorMessage = 'Usuario y clave son requeridos';
      return;
    }
    
    
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log( "respuesta de la api :"+ response);
        // Guarda el token en localStorage o como desees manejarlo
        localStorage.setItem('token', response.token);
        // Redirige al dashboard o alguna página protegida
        this.router.navigate(['/admin']);
      },
      error: (err) => {
      
        this.errorMessage = 'Usuario o clave incorrectos';
        
      }
    });
  }

}
