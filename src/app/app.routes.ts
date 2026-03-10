import { Routes } from '@angular/router';

// ── Components ──────────────────────────────────────────────────────────
import { TabsUtilisateurComponent } from './components/tabs-utilisateur/tabs-utilisateur.component';
import { TabsCollecteurComponent } from './components/tabs-collecteur/tabs-collecteur.component';

// ── Pages UTILISATEUR ─────────────────────────────────────────────────────
import { MarcheDuRecyclageComponent } from './components/marche-du-recyclage/marche-du-recyclage.component';
import { DetailsAnnonceRecyclageComponent } from './components/details-annonce-recyclage/details-annonce-recyclage.component';
import { CreerUneAnnonceDeRecyclageComponent } from './components/creer-une-annonce-de-recyclage/creer-une-annonce-de-recyclage.component';
import { PrendreRendezVousComponent } from './components/prendre-rendez-vous/prendre-rendez-vous.component';
import { ConfirmerRendezVousComponent } from './components/confirmer-rendez-vous/confirmer-rendez-vous.component';
import { PaiementTransactionComponent } from './components/paiement-transaction/paiement-transaction.component';
import { SuiviRecyclageComponent } from './components/suivi-recyclage/suivi-recyclage.component';
import { CollecteTermineComponent } from './components/collecte-termine/collecte-termine.component';
import { HistoriqueCollecteComponent } from './components/historique-collecte/historique-collecte.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';

// ── Pages COLLECTEUR ──────────────────────────────────────────────────────
import { TableauDeBordCollecteurComponent } from './components/tableau-de-bord-collecteur/tableau-de-bord-collecteur.component';
import { MissionsDisponiblesComponent } from './components/missions-disponibles/missions-disponibles.component';
import { NavigationCollecteurComponent } from './components/navigation-collecteur/navigation-collecteur.component';
import { ValidationEtPaiementComponent } from './components/validation-et-paiement/validation-et-paiement.component';

export const routes: Routes = [

  // ── Redirection racine ────────────────────────────────────────────────
  { path: '', redirectTo: 'splash-screen-clean-collect', pathMatch: 'full' },

  // ── Onboarding — aucun tab bar ────────────────────────────────────────
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

  // ══════════════════════════════════════════════════════════════════════
  // LAYOUT UTILISATEUR  →  /utilisateur/...
  // Tab bar : Accueil | Marché | Publier | Historique | Profil
  // ══════════════════════════════════════════════════════════════════════
  {
    path: 'utilisateur',
    component: TabsUtilisateurComponent,
    children: [
      { path: 'marche-du-recyclage', component: MarcheDuRecyclageComponent },
      { path: 'details_annonce_recyclage', component: DetailsAnnonceRecyclageComponent },
      { path: 'creer_une_annonce_recyclage', component: CreerUneAnnonceDeRecyclageComponent },
      { path: 'prendre_rendez_vous', component: PrendreRendezVousComponent },
      { path: 'confirmer_rendez_vous', component: ConfirmerRendezVousComponent },
      { path: 'paiement_transaction', component: PaiementTransactionComponent },
      { path: 'suivi_collecte', component: SuiviRecyclageComponent },
      { path: 'collecte_termine', component: CollecteTermineComponent },
      { path: 'historique_collecte', component: HistoriqueCollecteComponent },
      { path: 'profil-utilisateur', component: ProfilUtilisateurComponent },
      // Défaut : marché
      { path: '', redirectTo: 'marche-du-recyclage', pathMatch: 'full' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════
  // LAYOUT COLLECTEUR  →  /collecteur/...
  // Tab bar : Missions | Carte | Historique | Profil
  // ══════════════════════════════════════════════════════════════════════
  {
    path: 'collecteur',
    component: TabsCollecteurComponent,
    children: [
      { path: 'tableau-de-bord', component: TableauDeBordCollecteurComponent },
      { path: 'missions-disponibles', component: MissionsDisponiblesComponent },
      { path: 'navigation-collecteur', component: NavigationCollecteurComponent },
      { path: 'validation-et-paiement', component: ValidationEtPaiementComponent },
      // Défaut : tableau de bord
      { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' }
    ]
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  // ── Fallback global ───────────────────────────────────────────────────
  { path: '**', redirectTo: 'splash-screen-clean-collect' }
];

