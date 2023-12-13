import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.page.html',
  styleUrls: ['./profiel.page.scss'],
})
export class ProfielPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  usuario: string = '';
  tipoUsuario: string = '';

  constructor(private storage: Storage) {}

  ngOnInit() {
    // Recuperar los datos del usuario del localStorage
    this.storage.get('users').then((users: any[]) => {
      if (users && users.length > 0) {
        const usuarioRegistrado = users[0]; // Supongamos que el primer usuario es el que ha iniciado sesión
        this.nombre = usuarioRegistrado.nombre;
        this.apellido = usuarioRegistrado.apellido;
        this.email = usuarioRegistrado.email;
        this.telefono = usuarioRegistrado.telefono;
        this.usuario = usuarioRegistrado.usuario; // Asignar el nombre de usuario
        this.tipoUsuario = usuarioRegistrado.tipoUsuario; // Asignar el tipo de usuario
      }
    });
  }
}
