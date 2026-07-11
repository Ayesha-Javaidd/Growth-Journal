import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then((m) => m.Shell),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(
            (m) => m.Dashboard
          ),
      },
      {
        path: 'salah',
        loadComponent: () =>
          import('./features/salah/salah').then(
            (m) => m.Salah
          ),
      },
      {
        path: 'quran',
        loadComponent: () =>
          import('./features/quran/quran').then(
            (m) => m.Quran
          ),
      },
      {
        path: 'seerah',
        loadComponent: () =>
          import('./features/seerah/seerah').then(
            (m) => m.Seerah
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings').then(
            (m) => m.Settings
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];