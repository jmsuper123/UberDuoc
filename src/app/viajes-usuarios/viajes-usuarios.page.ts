import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';

export interface Viaje {
  id: number,
  hora: string,
  capacidad: number,
  destino: string,
  precio: number,
  pasajeros: string[],
  editando?: boolean;
}

@Component({
  selector: 'app-viajes-usuarios',
  templateUrl: './viajes-usuarios.page.html',
  styleUrls: ['./viajes-usuarios.page.scss'],
})
export class ViajesUsuariosPage implements OnInit {
  viajes: Viaje[] = [];
  usuario: string = ''; // Variable para almacenar el nombre de usuario

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.cargarViajesDesdeStorage();
    await this.obtenerUsuarioActual();
  }

  async cargarViajesDesdeStorage() {
    this.viajes = await this.storage.get('viajes') || [];
  }

  async obtenerUsuarioActual() {
    const users = await this.storage.get('users');
    if (users && users.length > 0) {
      const usuarioRegistrado = users[0]; // Supongamos que el primer usuario es el que ha iniciado sesión
      this.usuario = usuarioRegistrado.usuario; // Asignar el nombre de usuario
    }
  }

  calcularCantidadPasajerosYCapacidad(viaje: Viaje): string {
    if (viaje.editando) {
      return viaje.capacidad.toString();
    } else {
      return `${viaje.pasajeros.length} / ${viaje.capacidad}`;
    }
  }

  async aceptarViaje(viaje: Viaje) {
    if (viaje.pasajeros.length < viaje.capacidad) {
      viaje.pasajeros.push(this.usuario); // Agregar el nombre del usuario a la lista de pasajeros
      await this.storage.set('viajes', this.viajes);
    } else {
      console.log('El viaje ya ha alcanzado su capacidad máxima de pasajeros');
      // Aquí puedes manejar el caso de que el viaje ya esté completo
    }
  }
}
