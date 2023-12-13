import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage {
  usuario = '';
  clave = '';
  email = '';
  nombre = '';
  apellido = '';
  telefono = '';
  numeroLicencia = '';
  tipoVehiculo = '';

  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async registrarConductor() {
    const user = {
      usuario: this.usuario,
      clave: this.clave,
      email: this.email,
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      tipoUsuario: 'conductor', // Campo para identificar al conductor
    };
  
    const datosConductor = {
      usuario: this.usuario,
      numeroLicencia: this.numeroLicencia,
      tipoVehiculo: this.tipoVehiculo,
      // Otros datos específicos del conductor...
    };

    if (this.clave.length < 8 || this.clave.length > 16) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener entre 8 y 16 caracteres.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Verificación si el conductor ya está registrado en 'users'
    const users = await this.storage.get('users') || [];
    const conductorExistente = users.find((user: any) => user.usuario === this.usuario);
    if (conductorExistente) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El conductor ya está registrado.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Almacenamiento en la tabla 'users'
    users.push(user);
    await this.storage.set('users', users);

    // Almacenamiento en la tabla 'datosConductor'
    const conductoresData = await this.storage.get('datosConductor') || [];
    conductoresData.push(datosConductor);
    await this.storage.set('datosConductor', conductoresData);

    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Conductor registrado correctamente.',
      buttons: ['OK']
    });
    await alert.present();

    this.router.navigate(['/home-conductores']);
  }
}
