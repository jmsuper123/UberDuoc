import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home-conductores',
  templateUrl: './home-conductores.page.html',
  styleUrls: ['./home-conductores.page.scss'],
})
export class HomeConductoresPage {

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  cerrarSesion() {
    // Eliminar los datos de sesión al cerrar sesión
    // Por ejemplo, si estás utilizando Ionic Storage
    this.storage.remove('conductores'); // Elimina los datos de conductores

    // Redirigir al usuario a la página de login después de cerrar sesión
    this.router.navigate(['/login']);
  }
}
