import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonRow, IonCol, IonText, IonList, IonCard,
  IonCardContent, IonIcon, IonBadge, IonButton, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline, refreshCircleOutline, carOutline, leafOutline } from 'ionicons/icons';

interface CollecteItem {
  id: number; title: string; date: string; icon: string;
  status: 'termine' | 'en-cours' | 'annule';
  statusLabel: string; amountLabel: string; amount: number; actionLabel: string;
}

@Component({
  selector: 'app-historique-collecte',
  templateUrl: './historique-collecte.component.html',
  styleUrls: ['./historique-collecte.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonRow, IonCol, IonText, IonList, IonCard,
    IonCardContent, IonIcon, IonBadge, IonButton, IonLabel
    // Pas de IonFooter/IonTabBar : géré par TabsComponent
  ]
})
export class HistoriqueCollecteComponent implements OnInit {

  selectedTab = 'tout';
  filterTabs  = [
    { key: 'tout',     label: 'Tout'     },
    { key: 'termine',  label: 'Terminé'  },
    { key: 'en-cours', label: 'En cours' },
    { key: 'annule',   label: 'Annulé'   }
  ];

  allItems: CollecteItem[] = [
    { id: 1, title: 'Déchets ménagers',        date: '12 MARS 2024 • 14:20',   icon: 'trash-outline',          status: 'termine',  statusLabel: 'TERMINÉ',  amountLabel: 'MONTANT PAYÉ', amount: 3000, actionLabel: 'Détails'   },
    { id: 2, title: 'Plastiques & Recyclables', date: '05 MARS 2024 • 09:15',   icon: 'refresh-circle-outline', status: 'termine',  statusLabel: 'TERMINÉ',  amountLabel: 'MONTANT PAYÉ', amount: 1500, actionLabel: 'Détails'   },
    { id: 3, title: 'Déchets encombrants',      date: "AUJOURD'HUI • 10:00",    icon: 'car-outline',            status: 'en-cours', statusLabel: 'EN COURS', amountLabel: 'ESTIMATION',   amount: 5000, actionLabel: 'Suivi GPS' },
    { id: 4, title: 'Déchets Organiques',       date: '28 FÉV. 2024 • 16:45',   icon: 'leaf-outline',           status: 'termine',  statusLabel: 'TERMINÉ',  amountLabel: 'MONTANT PAYÉ', amount: 2000, actionLabel: 'Détails'   }
  ];

  get filteredItems(): CollecteItem[] {
    return this.selectedTab === 'tout' ? this.allItems : this.allItems.filter(i => i.status === this.selectedTab);
  }

  constructor(private router: Router) {
    addIcons({ trashOutline, refreshCircleOutline, carOutline, leafOutline });
  }

  selectTab(key: string): void { this.selectedTab = key; }

  /**
   * "Suivi GPS"  (en-cours) → /suivi_collecte
   * "Détails"    (terminé)  → /collecte_termine
   */
  onAction(item: CollecteItem): void {
    if (item.status === 'en-cours') {
      this.router.navigate(['/tabs/suivi_collecte']);
    } else {
      this.router.navigate(['/tabs/collecte_termine']);
    }
  }

  ngOnInit() {}
}