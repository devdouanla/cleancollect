import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  IonTabs, IonTabBar, IonTabButton,
  IonIcon, IonLabel, IonRouterOutlet
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline, storefrontOutline, addOutline,
  timeOutline, personOutline
} from 'ionicons/icons';

/** Mappe chaque route → onglet utilisateur actif */
const ROUTE_TO_TAB: Record<string, string> = {
  'accueil':                     'accueil',
  'marche-du-recyclage':         'marche',
  'details_annonce_recyclage':   'marche',
  'creer_une_annonce_recyclage': 'publier',
  'historique_collecte':         'historique',
  'suivi_collecte':              'historique',
  'paiement_transaction':        'historique',
  'prendre_rendez_vous':         'historique',
  'confirmer_rendez_vous':       'historique',
  'collecte_termine':            'historique',
  'profil-utilisateur':          'profil',
};

const HIDDEN_ROUTES = new Set([
  '', 'splash-screen-cleancollect', 'onboarding-paiement-securis'
]);

@Component({
  selector: 'app-tabs-utilisateur',
  templateUrl: './tabs-utilisateur.component.html',
  styleUrls: ['./tabs-utilisateur.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonTabs, IonTabBar, IonTabButton,
    IonIcon, IonLabel, IonRouterOutlet
  ]
})
export class TabsUtilisateurComponent implements OnInit, OnDestroy {

  activeTab  = 'marche';
  isVisible  = true;

  private routerSub!: Subscription;

  constructor(private router: Router) {
    addIcons({ homeOutline, storefrontOutline, addOutline, timeOutline, personOutline });
  }

  ngOnInit(): void {
    this.syncWithRoute(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => this.syncWithRoute(e.urlAfterRedirects));
  }

  ngOnDestroy(): void { this.routerSub?.unsubscribe(); }

  private syncWithRoute(url: string): void {
    const segment = url.split('?')[0].split('#')[0].split('/').filter(Boolean).pop() ?? '';
    this.isVisible = !HIDDEN_ROUTES.has(segment);
    if (ROUTE_TO_TAB[segment]) this.activeTab = ROUTE_TO_TAB[segment];
  }

  navigate(tab: string): void {
    switch (tab) {
      case 'accueil':
      case 'marche':     this.router.navigate(['/utilisateur/marche-du-recyclage']);         break;
      case 'publier':    this.router.navigate(['/utilisateur/creer_une_annonce_recyclage']); break;
      case 'historique': this.router.navigate(['/utilisateur/historique_collecte']);          break;
      case 'profil':     this.router.navigate(['/utilisateur/profil-utilisateur']);           break;
    }
  }
}