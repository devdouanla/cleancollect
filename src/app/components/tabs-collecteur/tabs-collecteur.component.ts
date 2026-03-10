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
  documentTextOutline, mapOutline,
  timeOutline, personCircleOutline
} from 'ionicons/icons';

/** Mappe chaque route → onglet collecteur actif */
const ROUTE_TO_TAB: Record<string, string> = {
  'tableau-de-bord-collecteur': 'missions',
  'missions-disponibles':       'missions',
  'navigation-collecteur':      'missions',
  'validation-et-paiement':     'missions',
  'carte-collecteur':           'carte',
  'historique-collecteur':      'historique',
  'profil-collecteur':          'profil',
};

const HIDDEN_ROUTES = new Set([
  '', 'splash-screen-cleancollect', 'onboarding-paiement-securis'
]);

@Component({
  selector: 'app-tabs-collecteur',
  templateUrl: './tabs-collecteur.component.html',
  styleUrls: ['./tabs-collecteur.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonTabs, IonTabBar, IonTabButton,
    IonIcon, IonLabel, IonRouterOutlet
  ]
})
export class TabsCollecteurComponent implements OnInit, OnDestroy {

  activeTab  = 'missions';
  isVisible  = true;

  private routerSub!: Subscription;

  constructor(private router: Router) {
    addIcons({ documentTextOutline, mapOutline, timeOutline, personCircleOutline });
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
      case 'missions':    this.router.navigate(['/collecteur/missions-disponibles']);       break;
      case 'carte':       this.router.navigate(['/collecteur/carte-collecteur']);           break;
      case 'historique':  this.router.navigate(['/collecteur/historique-collecteur']);      break;
      case 'profil':      this.router.navigate(['/collecteur/profil-collecteur']);          break;
    }
  }
}