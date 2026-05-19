import { Routes } from '@angular/router';

export const VIAJES_ROUTES: Routes = [
  {
    path: 'listado',
    loadComponent: () =>
      import('./pages/listado/listado')
        .then(c => c.Listado)
  },
  {
    path: 'nuevo',
    loadComponent: () =>
      import('./pages/formulario/formulario')
        .then(c => c.Formulario)
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/formulario/formulario')
        .then(c => c.Formulario)
  },
  {
    path: '**',
    redirectTo: 'listado'
  }
];