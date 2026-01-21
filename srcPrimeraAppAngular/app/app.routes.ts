import { Routes } from '@angular/router';
import { Saludo } from './saludo/saludo';
import { App } from './app';
import { UserProfileForm } from './user-profile-form/user-profile-form';

export const routes: Routes = [
  { path: '', component: App }, //Ruta por defecto
  { path: 'saludo', component: Saludo },
  { path: 'perfil', component: UserProfileForm }
];
