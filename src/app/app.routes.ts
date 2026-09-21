import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', loadComponent: () => import('./paginas/inicio/inicio').then((m) => m.Inicio) },
  {
    path: 'nosotros',
    loadComponent: () => import('./paginas/nosotros/nosotros').then((m) => m.Nosotros),
  },
  {
    path: 'carreras',
    loadComponent: () => import('./paginas/carreras/carreras').then((m) => m.Carreras),
  },
  {
    path: 'galeria',
    loadComponent: () => import('./paginas/galeria/galeria').then((m) => m.Galeria),
  },
  {
    path: 'matricula',
    loadComponent: () => import('./paginas/matricula/matricula').then((m) => m.Matricula),
  },
  {
    path: 'iniciarsesion',
    loadComponent: () =>
      import('./paginas/iniciarsesion/iniciarsesion').then((m) => m.Iniciarsesion),
  },
  { path: '**', redirectTo: 'inicio' },
];
