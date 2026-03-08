import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'splash-screen-clean-collect',
    loadComponent: () => import('./splash-screen-clean-collect/splash-screen-clean-collect.page').then((m) => m.SplashScreenCleanCollectPage),
  },
  {
    path: 'onboarding-paiement-securise',
    loadComponent: () => import('./onboarding-paiement-securise/onboarding-paiement-securise.component').then((m) => m.OnboardingPaiementSecuriseComponent),
  },
  {
    path: 'connexion-clean-collect',
    loadComponent: () => import('./connexion-clean-collect/connexion-clean-collect.component').then((m) => m.ConnexionCleanCollectComponent),
  },
  {
    path: 'inscription-utilisateur',
    loadComponent: () => import('./inscription-utilisateur/inscription-utilisateur.component').then((m) => m.InscriptionUtilisateurComponent),
  },
  {
    path: '',
    redirectTo: 'inscription-utilisateur',
    pathMatch: 'full',
  },
];
