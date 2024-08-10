import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    title: 'inicio',
  },
  {
    path: 'propiedades',
    component: PropiedadesComponent,
    title: 'propiedades',
  },
];
