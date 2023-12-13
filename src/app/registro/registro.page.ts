import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario = '';
  clave = '';
  email = '';
  nombre = '';
  apellido = '';
  telefono = '';

  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async registrarUsuario() {
    const user = {
      usuario: this.usuario,
      clave: this.clave,
      email: this.email,
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      tipoUsuario: 'usuario', // Campo para identificar al usuario
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

    // Verificación si el usuario ya existe
    const users = await this.storage.get('users') || [];
    const usuarioExistente = users.find((user: any) => user.usuario === this.usuario);
    if (usuarioExistente) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El usuario ya existe.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Almacenamiento en la tabla de usuarios
    users.push(user);
    await this.storage.set('users', users);

    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Usuario registrado correctamente.',
      buttons: ['OK']
    });
    await alert.present();

    this.router.navigate(['/home']);
  }
}
