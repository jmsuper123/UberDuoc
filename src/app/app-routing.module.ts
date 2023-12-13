import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'profiel',
    loadChildren: () => import('./profiel/profiel.module').then( m => m.ProfielPageModule)
  },
  {
    path: 'usual-routes',
    loadChildren: () => import('./usual-routes/usual-routes.module').then( m => m.UsualRoutesPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'home-conductores',
    loadChildren: () => import('./home-conductores/home-conductores.module').then( m => m.HomeConductoresPageModule)
  },
  {
    path: 'map-usuaios',
    loadChildren: () => import('./map-usuaios/map-usuaios.module').then( m => m.MapUsuaiosPageModule)
  },
  {
    path: 'viajes-usuarios',
    loadChildren: () => import('./viajes-usuarios/viajes-usuarios.module').then( m => m.ViajesUsuariosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
