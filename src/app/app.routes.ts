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
    path: 'carreras/sistemas-electronicos',
    loadComponent: () =>
      import('./carreras/sistemas-electronicos/sistemas-electronicos').then(
        (m) => m.SistemasElectronicosComponent,
      ),
  },
  {
    path: 'carreras/plataformas-ti',
    loadComponent: () =>
      import('./carreras/plataformas-ti/plataformas-ti').then((m) => m.PlataformasTiComponent),
  },
  {
    path: 'carreras/peluqueria-barberia',
    loadComponent: () =>
      import('./carreras/peluqueria-barberia/peluqueria-barberia').then(
        (m) => m.PeluqueriaBarberiaComponent,
      ),
  },
  {
    path: 'carreras/cuidados-nino-adulto',
    loadComponent: () =>
      import('./carreras/cuidados-nino-adulto/cuidados-nino-adulto').then(
        (m) => m.CuidadosNinoAdultoComponent,
      ),
  },
  {
    path: 'carreras/cocina-gastronomia',
    loadComponent: () =>
      import('./carreras/cocina-gastronomia/cocina-gastronomia').then(
        (m) => m.CocinaGastronomiaComponent,
      ),
  },
  {
    path: 'carreras/corte-ensamblaje-textil',
    loadComponent: () =>
      import('./carreras/corte-ensamblaje-textil/corte-ensamblaje-textil').then(
        (m) => m.CorteEnsamblajeTextilComponent,
      ),
  },
  {
    path: 'carreras/estilismo-avanzado',
    loadComponent: () =>
      import('./carreras/estilismo-avanzado/estilismo-avanzado').then(
        (m) => m.EstilismoAvanzadoComponent,
      ),
  },
  {
    path: 'carreras/panaderia-pasteleria',
    loadComponent: () =>
      import('./carreras/panaderia-pasteleria/panaderia-pasteleria').then(
        (m) => m.PanaderiaPasteleriaComponent,
      ),
  },
  {
    path: 'carreras/pasteleria-fina',
    loadComponent: () =>
      import('./carreras/pasteleria-fina/pasteleria-fina').then((m) => m.PasteleriaFinaComponent),
  },
  {
    path: 'carreras/auxiliar-administrativo',
    loadComponent: () =>
      import('./carreras/auxiliar-administrativo/auxiliar-administrativo').then(
        (m) => m.AuxiliarAdministrativoComponent,
      ),
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
