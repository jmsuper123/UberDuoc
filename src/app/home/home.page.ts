import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  cerrarSesion() {
    // Eliminar los datos de sesión al cerrar sesión
    // Por ejemplo, si estás utilizando Ionic Storage
    this.storage.remove('users'); // Elimina los datos de usuarios

    // Redirigir al usuario a la página de login después de cerrar sesión
    this.router.navigate(['/login']);
  }
}
