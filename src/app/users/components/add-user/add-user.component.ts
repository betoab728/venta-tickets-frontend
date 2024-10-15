import { Component } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
import { Router, } from '@angular/router';
import { RouterModule } from '@angular/router';
import { User } from '../../model/user.interface';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  @ViewChild('password') password!: ElementRef;
  @ViewChild('confirmPassword') confirmPassword!: ElementRef;

    //usuario
  user: User = {
    idusuario: 0,
    nombre: '',
    correo: '',
    clave: '',
    created_at: new Date(),
    updated_at: new Date(),
    estado: 'a'
  };

   //mensaje de error
   errorMessage: string = '';
   confirmPasswordValue: string = '';

   
  //constructor
  constructor(private usersService: UsersService ,private router: Router ) { }

  //agregar usuario
  agregarUsuario(): void {

    console.log(this.user);

   
     //si no hay usuario o clave
  if (!this.user.nombre || !this.user.clave || !this.user.correo) {
    this.errorMessage = 'todos los campos son requeridos';
    return;
  }

   //si las claves no coinciden
   if (this.user.clave !== this.confirmPasswordValue) { // Compara con la variable local
    this.errorMessage = 'Las claves no coinciden';
    console.log('Las claves no coinciden');
    return;
  }


  // Si las validaciones pasan, se llama a la confirmación
    this.confirmarAgregarUsuario();

  }

  
  //confirmacion de agregar usuario
  confirmarAgregarUsuario(): void {
    Swal.fire({
      title: 'Agregar usuario',
      text: '¿Está seguro de agregar el usuario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.addUser(this.user).subscribe({
          next: () => {
            Swal.fire('Usuario agregado', 'El usuario se ha agregado correctamente', 'success');
            //navegar a la lista de usuarios
            this.router.navigate(['/admin/usuarios']);
          },
          error: (error) => {
            console.error('Error al agregar usuario', error);
            Swal.fire('Error', 'Error al agregar usuario', 'error');
          }
        });
      }
    });
  }
}
