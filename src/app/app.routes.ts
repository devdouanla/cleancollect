import { Routes } from '@angular/router';

import { SplashScreenCleancollectComponent }   from './components/splash-screen-cleancollect/splash-screen-cleancollect.component';
import { OnboardingPaiementSecurisComponent }  from './components/onboarding-paiement-securis/onboarding-paiement-securis.component';

// Layout tabs (contient le IonRouterOutlet + IonTabBar)
import { TabsComponent }                       from './components/tabs/tabs.component';

// Pages avec tab bar
import { MarcheDuRecyclageComponent }          from './components/marche-du-recyclage/marche-du-recyclage.component';
import { DetailsAnnonceRecyclageComponent }    from './components/details-annonce-recyclage/details-annonce-recyclage.component';
import { CreerUneAnnonceDeRecyclageComponent } from './components/creer-une-annonce-de-recyclage/creer-une-annonce-de-recyclage.component';
import { PrendreRendezVousComponent }          from './components/prendre-rendez-vous/prendre-rendez-vous.component';
import { ConfirmerRendezVousComponent }        from './components/confirmer-rendez-vous/confirmer-rendez-vous.component';
import { PaiementTransactionComponent }        from './components/paiement-transaction/paiement-transaction.component';
import { SuiviRecyclageComponent }             from './components/suivi-recyclage/suivi-recyclage.component';
import { CollecteTermineComponent }            from './components/collecte-termine/collecte-termine.component';
import { HistoriqueCollecteComponent }         from './components/historique-collecte/historique-collecte.component';

export const routes: Routes = [

  // ── Redirection vers splash ──────────────────────────────────────────
  { path: '', redirectTo: 'splash-screen-cleancollect', pathMatch: 'full' },

  // ── Onboarding — PAS de tab bar ──────────────────────────────────────
  { path: 'splash-screen-cleancollect',  component: SplashScreenCleancollectComponent  },
  { path: 'onboarding-paiement-securis', component: OnboardingPaiementSecurisComponent },

  // ── Layout principal AVEC tab bar ────────────────────────────────────
  // TabsComponent est le "shell" : il contient IonTabs + IonTabBar
  // Toutes les pages de l'app sont des routes enfants de /tabs
  {
    path: 'tabs',
    component: TabsComponent,
    children: [

      // Onglet Marché
      { path: 'marche-du-recyclage',         component: MarcheDuRecyclageComponent          },
      { path: 'details_annonce_recyclage',   component: DetailsAnnonceRecyclageComponent    },

      // Onglet Publier
      { path: 'creer_une_annonce_recyclage', component: CreerUneAnnonceDeRecyclageComponent },

      // Flux RDV → Paiement → Suivi (onglet Historique)
      { path: 'prendre_rendez_vous',         component: PrendreRendezVousComponent          },
      { path: 'confirmer_rendez_vous',       component: ConfirmerRendezVousComponent        },
      { path: 'paiement_transaction',        component: PaiementTransactionComponent        },
      { path: 'suivi_collecte',              component: SuiviRecyclageComponent             },
      { path: 'collecte_termine',            component: CollecteTermineComponent            },

      // Onglet Historique
      { path: 'historique_collecte',         component: HistoriqueCollecteComponent         },

      // Redirection par défaut vers le marché
      { path: '', redirectTo: 'marche-du-recyclage', pathMatch: 'full' }
    ]
  },

  // ── Fallback global ──────────────────────────────────────────────────
  { path: '**', redirectTo: 'splash-screen-cleancollect' }
];