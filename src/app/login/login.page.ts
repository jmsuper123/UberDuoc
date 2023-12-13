import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario = '';
  clave = '';
  tipoRegistro = 'usuario';

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  login() {
    if (this.clave.length < 8 || this.clave.length > 16) {
      this.mostrarAlerta('La contraseña debe tener entre 8 y 16 caracteres.');
      return;
    }
  
    this.storage.get('user').then((user: any[]) => {
      if (!user) {
        this.mostrarAlerta('No hay usuarios registrados');
        return;
      }
  
      const usuarioEncontrado = user.find(
        (u) => u.usuario === this.usuario && u.clave === this.clave
      );
  
      if (usuarioEncontrado) {
        const esConductor = usuarioEncontrado.tipoUsuario === 'conductor';
        const esUsuario = usuarioEncontrado.tipoUsuario === 'usuario';
  
        if (esConductor) {
          this.mostrarAlerta('Ingresaste correctamente como conductor');
          this.router.navigate(['/home-conductores']);
        } else if (esUsuario) {
          this.mostrarAlerta('Ingresaste correctamente como usuario');
          this.router.navigate(['/home']);
        }
      } else {
        this.mostrarAlerta('Usuario o contraseña incorrectos');
      }
    });
  }
  

  redirigirRegistro() {
    if (this.tipoRegistro == 'usuario') {
      this.router.navigate(['/registro']);
    } else if (this.tipoRegistro == 'conductor') {
      this.router.navigate(['/registro-conductor']);
    }
  }

  mostrarAlerta(mensaje: string) {
    alert(mensaje);
  }
}
