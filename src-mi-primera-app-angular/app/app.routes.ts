import { Routes } from '@angular/router';
import { Saludo } from './saludo/saludo';
import { App } from './app';
import { UserProfileForm } from './user-profile-form/user-profile-form';
import { NotificationsPanel } from './notifications-panel/notifications-panel';
import { Tienda } from './tienda/tienda';
import { Home } from './home/home';

export const routes: Routes = [
  //{ path: '', component: App }, 
   { path: '', component: Home }, //Ruta por defecto
  { path: 'saludo', component: Saludo },
  { path: 'perfil', component: UserProfileForm },
  { path:'panel', component: NotificationsPanel},
  { path: 'tienda', component: Tienda }
];
