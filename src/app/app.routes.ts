import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'community',
    pathMatch: 'full',
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/community/community.page').then( m => m.CommunityPage)
  },
  {
    path: 'collecte',
    loadComponent: () => import('./pages/collecte/collecte.page').then((m) => m.CollectePage),
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then((m) => m.ProfilPage),
  },
];
