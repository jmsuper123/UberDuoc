import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';

export interface Viaje {
  id: number,
  hora: string,
  capacidad: number,
  destino: string,
  precio: number,
  pasajeros: string[] // Agregar la propiedad para la lista de pasajeros
  editando?: boolean;
}


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  viajes: Viaje[] = []

  constructor(private storage: Storage) { }

  async ngOnInit() {


  }

  async ionViewDidEnter() {
    this.viajes = await this.storage.get("viajes") || []
    setInterval(async () => {
      this.viajes = await this.storage.get("viajes") || []
    }, 5000);
  }
  async eliminarViaje(viaje: Viaje) {
    // Eliminar el viaje de la lista
    this.viajes = this.viajes.filter(v => v !== viaje);
  
    // Actualizar el almacenamiento (si se requiere guardar los cambios)
    await this.storage.set('viajes', this.viajes);
  }
  async editarViaje(viaje: Viaje) {
    viaje.editando = true; // Habilita el modo de edición para la fila
  }
  
  async confirmarEdicion(viaje: Viaje) {
    if (viaje.pasajeros.length <= viaje.capacidad) {
      delete viaje.editando; // Elimina la propiedad 'editando' para deshabilitar la edición
      // Guarda los cambios en tu almacenamiento aquí, si es necesario
    } else {
      // Muestra una alerta o maneja el caso de exceso de pasajeros según tu lógica
      console.log('El número de pasajeros supera la capacidad anotada');
      // Puedes decidir qué hacer en caso de exceso de pasajeros
    }
  }
  
  async cancelarEdicion(viaje: Viaje) {
    viaje.editando = false; // Cancela la edición y vuelve al estado original
    // Podrías revertir los cambios si ya se han realizado
  }
  async reiniciarPasajeros(viaje: Viaje) {
    viaje.pasajeros = []; // Vacía la lista de pasajeros
    viaje.capacidad = 0; // Establece la capacidad como 0
    // Puedes guardar estos cambios en el almacenamiento si es necesario
  }

}
